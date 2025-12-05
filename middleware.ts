import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseMiddlewareClient } from '@/lib/supabase-middleware';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (!url.pathname.startsWith('/api/blacklist')) {
    const ipHeader = req.headers.get('x-forwarded-for');
    const ip = ipHeader?.split(',')[0]?.trim() ?? '0.0.0.0';

    const origin = url.origin;
    const res = await fetch(`${origin}/api/blacklist/check?ip=${encodeURIComponent(ip)}`, {
      cache: 'no-store',
    });

    if (res.ok) {
      const data = await res.json();
      if (data.blocked) {
        return new NextResponse('Forbidden', { status: 403 });
      }
    }
  }

  const { pathname } = url;

  if (pathname.startsWith('/admin/login')) return NextResponse.next();
  if (!pathname.startsWith('/admin')) return NextResponse.next();

  const res = NextResponse.next({ request: { headers: req.headers } });
  const supabase = createSupabaseMiddlewareClient(req, res);

  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  return res;
}
