'use client';

import React, { useEffect, useState, ReactNode } from 'react';

type FaderProps = {
  children: ReactNode;
  intervalMs: number[]; // 각 child 별 duration
};

export default function Fader(props: FaderProps) {
  const { children, intervalMs } = props;

  const childArray = React.Children.toArray(children);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (childArray.length === 0) return;

    const duration = intervalMs[index] ?? intervalMs[intervalMs.length - 1];

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % childArray.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [index, childArray.length, intervalMs]);

  if (childArray.length === 0) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <React.Fragment>
      <div className="glass_fader_wrapper">
        {childArray.map((child, i) => (
          <div key={i} className={`fader_item fader_item${i} ${i === index ? 'active' : ''}`}>
            {child}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
