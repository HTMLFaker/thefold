'use client';
import React from 'react';

function collectTotals() {
  const byType = new Map<string, { bytes: number; count: number }>();
  let total = 0;

  // 1) 문서 자체
  const nav = performance.getEntriesByType('navigation')[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (nav && typeof (nav as any).transferSize === 'number') {
    const b = (nav as any).transferSize as number;
    total += b;
    byType.set('document', { bytes: b, count: 1 });
  }

  // 2) 기타 리소스
  const res = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  for (const e of res) {
    // cross-origin은 TAO 헤더 없으면 0이 들어올 수 있음
    const b = (e as any).transferSize as number | undefined;
    if (!b || b <= 0) continue;

    total += b;
    const key = e.initiatorType || 'other';
    const prev = byType.get(key) ?? { bytes: 0, count: 0 };
    prev.bytes += b;
    prev.count += 1;
    byType.set(key, prev);
  }

  const byTypeObj = Object.fromEntries([...byType.entries()].map(([k, v]) => [k, v.bytes]));
  const byTypeCount = Object.fromEntries([...byType.entries()].map(([k, v]) => [k, v.count]));
  return { total, byType: byTypeObj, counts: byTypeCount };
}

export default function ResourceReporter() {
  React.useEffect(() => {
    let sent = false;
    const send = () => {
      if (sent) return;
      sent = true;
      const { total, byType, counts } = collectTotals();
      // 비동기 전송 (대기 X)
      fetch('/api/visit/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({ totalBytes: total, byType, counts }),
      }).catch(() => {});
    };

    // 최초 로드 후 약간의 여유를 두고 전송
    const t = setTimeout(send, 2000);
    // 탭이 떠나기 직전 한번 더 보장
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') send();
    });

    return () => {
      clearTimeout(t);
      send();
    };
  }, []);

  return <React.Fragment></React.Fragment>;
}
