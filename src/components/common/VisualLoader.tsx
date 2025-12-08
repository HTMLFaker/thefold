'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export function VisualLoader() {
  useEffect(() => {
    const img = new window.Image();
    img.src = '/visual1.jpg';

    img.onload = () => {
      document.body.classList.add('is-loaded');
      document.body.classList.remove('loading');
    };

    img.onerror = () => {
      // 안전장치: 에러나도 보여주긴 해야 함
      document.body.classList.add('is-loaded');
      document.body.classList.remove('loading');
    };
  }, []);

  return null; // 렌더링 없음
}
