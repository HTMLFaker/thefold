'use client';
import { useEffect, useRef } from 'react';

export default function HeaderControl() {
  const lastScroll = useRef(0);

  useEffect(() => {
    const hd = document.querySelector('#headerController');
    const headerMenuBtn = document.querySelector('#headerMenuButton');

    console.log(headerMenuBtn);
    headerMenuBtn?.addEventListener('click', () => {
      console.log('gkajsdflkasjdflasdf');
      hd?.classList.toggle('is_open');
    });

    const handleScroll = () => {
      const current = window.scrollY;

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
