'use client';
import { useEffect } from 'react';

export default function MovieControl() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = [
        document.querySelector('.card_movie.glass'),
        document.querySelector('.card_movie.partition'),
        document.querySelector('.card_movie.the'),
        document.querySelector('#aboutUs'),
      ];

      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const sum = scrollTop + clientHeight;

      elements.map((dom) => {
        if (!dom) return;
        const rect = dom.getBoundingClientRect();
        if (rect.top + window.scrollY <= sum - rect.height / 2) {
          dom.classList.add('is_passed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
