'use client';
import { useEffect, useRef } from 'react';

export default function HeaderControl() {
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const hd = document.querySelector('#headerController');
      if (!hd) return;

      if (current <= 0) {
        hd.classList.add('is_top');
        hd.classList.remove('is_scroll_down', 'is_scroll_up');
        lastScroll.current = current;
        return;
      }

      hd.classList.remove('is_top');
      const goingDown = current > lastScroll.current;
      hd.classList.toggle('is_scroll_down', goingDown);
      hd.classList.toggle('is_scroll_up', !goingDown);

      lastScroll.current = current;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
