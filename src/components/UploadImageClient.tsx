'use client';

import React from 'react';

export function UploadImageClient() {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [uploading, setUploading] = React.useState(false);

  const handleChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log('upload result:', data);

      if (!res.ok || !data.ok) {
        alert('업로드 실패');
        return;
      }

      // Supabase public URL
      setPreviewUrl(data.url);
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
