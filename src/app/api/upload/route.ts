import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const original = formData.get('file_original');
    const thumb = formData.get('file_thumb');

    if (!(original instanceof File) || !(thumb instanceof File)) {
      return NextResponse.json(
        { ok: false, message: 'file_original / file_thumb 둘 다 필요합니다.' },
        { status: 400 },
      );
    }

    // 파일명 그대로 사용 → 클라이언트에서 timestamp+랜덤 생성한 이름
    const originalPath = `uploads/${original.name}`;
    const thumbPath = `uploads/${thumb.name}`;

    // 업로드 helper
    const uploadFile = async (path: string, file: File) => {
      return supabase.storage.from('images').upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      });
    };

    const [origRes, thumbRes] = await Promise.all([
      uploadFile(originalPath, original),
      uploadFile(thumbPath, thumb),
    ]);

    if (origRes.error || thumbRes.error) {
      return NextResponse.json(
        {
          ok: false,
          message: 'upload failed',
          detail: origRes.error?.message || thumbRes.error?.message,
        },
        { status: 500 },
      );
    }

    const { data: origUrl } = supabase.storage.from('images').getPublicUrl(originalPath);
    const { data: thumbUrl } = supabase.storage.from('images').getPublicUrl(thumbPath);

    return NextResponse.json({
      ok: true,
      url_original: origUrl.publicUrl,
      url_thumb: thumbUrl.publicUrl,
      path_original: origRes.data.path,
      path_thumb: thumbRes.data.path,
    });
  } catch {
    return NextResponse.json({ ok: false, message: 'unexpected error' }, { status: 500 });
  }
}
