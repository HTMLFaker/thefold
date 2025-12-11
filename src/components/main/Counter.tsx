'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function Counter({ target, duration = 3000 }) {
  const [value, setValue] = useState(0);
  const startRef = useRef(0);

  useEffect(() => {
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);

      if (progress < 1) {
        startRef.current = requestAnimationFrame(update);
      }
    }

    startRef.current = requestAnimationFrame(update);

    return () => cancelAnimationFrame(startRef.current);
  }, [target, duration]);

  return <div className="count">{value.toLocaleString()}</div>;
}
