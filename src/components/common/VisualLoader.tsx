'use client';

import { useEffect } from 'react';

export function VisualLoader() {
  useEffect(() => {
    const urls = ['/visual1.jpg', '/visual2.jpg', '/visual3.jpg'];

    const preload = (url: string) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });

    Promise.all(urls.map(preload)).then(() => {
      document.body.classList.add('is-loaded');
      document.body.classList.remove('loading');
    });
  }, []);

  return null;
}
