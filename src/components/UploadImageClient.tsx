'use client';

import React from 'react';
import imageCompression from 'browser-image-compression';

export function UploadImageClient() {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [uploading, setUploading] = React.useState(false);

  const compressImage = (file: File, size: number) =>
    imageCompression(file, {
      maxWidthOrHeight: size,
      initialQuality: 0.7,
      fileType: 'image/jpeg',
      useWebWorker: true,
    });

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      // 1) 원본 압축 (1920px)
      const original = await compressImage(file, 1920);

      // 2) 썸네일 압축 (500px)
      const thumbnail = await compressImage(file, 500);

      // 3) 파일명 생성
      const timestamp = Date.now();
      const rand = Math.random().toString(36).substring(2, 6);

      const originalName = `${timestamp}_${rand}.jpg`;
      const thumbName = `${timestamp}_${rand}_thumb.jpg`;

      // 4) FormData 만들기 (파일 2개)
      const formData = new FormData();
      formData.append('file_original', original, originalName);
      formData.append('file_thumb', thumbnail, thumbName);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        alert('업로드 실패');
        return;
      }

      // 대표로 원본 preview
      setPreviewUrl(data.url_original);
    } catch {
      alert('업로드 중 오류');
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleChangeFile} />
      {uploading && <p>업로드 중...</p>}
      {previewUrl && <img src={previewUrl} style={{ maxWidth: 300 }} />}
    </>
  );
}
