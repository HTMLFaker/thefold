'use client';

import React from 'react';
import imageCompression from 'browser-image-compression';

export function UploadImageClient() {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [uploading, setUploading] = React.useState(false);

  const handleChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);

      // 1) 브라우저에서 이미지 압축
      const compressed = await imageCompression(file, {
        maxWidthOrHeight: 1920, // 리사이즈 (픽셀 감소)
        initialQuality: 0.6, // JPG 품질 70% 느낌
        useWebWorker: true,
      });

      console.log(
        'before:',
        file.size,
        'after:',
        compressed.size,
        'ratio:',
        (compressed.size / file.size).toFixed(2),
      );

      // 2) 압축된 파일을 FormData 로 업로드
      const formData = new FormData();
      // 파일 이름은 기존 이름 유지 (확장자 포함)
      formData.append('file', compressed, file.name);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log('upload result:', data);

      if (!res.ok || !data.ok) {
        alert(`업로드 실패: ${data.message ?? 'unknown error'}`);
        return;
      }

      setPreviewUrl(data.url);
    } catch (error) {
      console.error(error);
      alert('압축 또는 업로드 중 오류가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <React.Fragment>
      <div>
        <input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleChangeFile} />
      </div>
      {uploading && <p>업로드 중...</p>}
      {previewUrl && (
        <div>
          <p>업로드 결과:</p>
          <img src={previewUrl} alt="uploaded" style={{ maxWidth: '300px', height: 'auto' }} />
        </div>
      )}
    </React.Fragment>
  );
}
