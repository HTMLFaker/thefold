'use client';
import { useEffect } from 'react';

export default function MovieControl() {
  useEffect(() => {
    const handleScroll = () => {
      const a = document.querySelector('.card_movie.glass');
      const b = document.querySelector('.card_movie.partition');
      const c = document.querySelector('.card_movie.the');

      if (!a || !b || !c) return;

      const rectA = a.getBoundingClientRect();
      const rectB = b.getBoundingClientRect();
      const rectC = c.getBoundingClientRect();

      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      const sum = scrollTop + clientHeight;

      console.log(sum, rectA.top + window.scrollY);

      if (rectA.top + window.scrollY <= sum - rectA.height / 2) {
        a.classList.add('is_passed');
      }
      if (rectB.top + window.scrollY <= sum - rectB.height / 2) {
        b.classList.add('is_passed');
      }
      if (rectC.top + window.scrollY <= sum - rectC.height / 2) {
        c.classList.add('is_passed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
