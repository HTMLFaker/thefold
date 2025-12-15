'use client';

import { useEffect, useState, useRef } from 'react';

type CounterProps = {
  target: number;
  duration?: number;
};

export default function Counter({ target, duration = 3000 }: CounterProps) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const selfRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = selfRef.current?.closest('#constructionCount');
    if (!(wrapper instanceof HTMLElement)) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        setValue(Math.floor(progress * target));
        if (progress < 1) rafIdRef.current = requestAnimationFrame(tick);
      };

      rafIdRef.current = requestAnimationFrame(tick);
    };

    if (wrapper.classList.contains('is_passed')) start();

    const observer = new MutationObserver(() => {
      if (wrapper.classList.contains('is_passed')) start();
    });

    observer.observe(wrapper, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [target, duration]);

  return (
    <div ref={selfRef} className="count">
      {value.toLocaleString()}
    </div>
  );
}
