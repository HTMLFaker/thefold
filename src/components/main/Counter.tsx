'use client';

import React, { useEffect, useState, useRef } from 'react';

type CounterProps = {
  target: number;
  duration?: number;
};

export default function Counter({ target, duration = 3000 }: CounterProps) {
  const [value, setValue] = useState(0);
  const rafIdRef = useRef<number | null>(null);
  const startedRef = useRef(false); // 중복 시작 방지
  const selfRef = useRef<HTMLDivElement | null>(null);

  const startAnimation = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(update);
      }
    };

    rafIdRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    const node = selfRef.current;
    if (!node) return;

    const wrapper = node.closest('.count_wrapper') as HTMLElement | null;
    if (!wrapper) return;

    // 이미 is_passed 붙어 있는 상태면 바로 시작
    if (wrapper.classList.contains('is_passed')) {
      startAnimation();
    }

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          if (wrapper.classList.contains('is_passed')) {
            startAnimation();
          }
        }
      }
    });

    observer.observe(wrapper, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [target, duration]);

  return (
    <div ref={selfRef} className="count">
      {value.toLocaleString()}
    </div>
  );
}
