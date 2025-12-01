import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!(file instanceof File)) {
      return NextResponse.json({ ok: false, message: 'file 필드가 필요합니다.' }, { status: 400 });
    }

    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const filePath = `uploads/${fileName}`;

    const { data, error } = await supabase.storage
      .from('images') // 버킷 이름
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('supabase upload error:', error);
      return NextResponse.json(
        { ok: false, message: 'upload failed', detail: error.message },
        { status: 500 },
      );
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from('images').getPublicUrl(filePath);

    return NextResponse.json({
      ok: true,
      path: data?.path,
      url: publicUrl,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: 'unexpected error' }, { status: 500 });
  }
}
