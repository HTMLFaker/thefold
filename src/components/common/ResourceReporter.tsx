'use client';

import React from 'react';

function collectTotals() {
  const byType = new Map<string, { bytes: number; count: number }>();
  let total = 0;
  const currentOrigin = window.location.origin;

  const nav = performance.getEntriesByType('navigation')[0] as
    | PerformanceNavigationTiming
    | undefined;

  if (nav && typeof (nav as any).transferSize === 'number') {
    const bytes = (nav as any).transferSize as number;
    total += bytes;
    byType.set('document', { bytes, count: 1 });
  }

  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

  for (const entry of resources) {
    let url: URL;

    try {
      url = new URL(entry.name);
    } catch {
      continue;
    }

    if (url.origin !== currentOrigin) continue;

    const bytes = (entry as any).transferSize as number | undefined;
    if (!bytes || bytes <= 0) continue;

    total += bytes;

    const key = entry.initiatorType || 'other';
    const prev = byType.get(key) ?? { bytes: 0, count: 0 };

    prev.bytes += bytes;
    prev.count += 1;
    byType.set(key, prev);
  }

  const byTypeBytes = Object.fromEntries(
    [...byType.entries()].map(([key, value]) => [key, value.bytes]),
  );
  const byTypeCounts = Object.fromEntries(
    [...byType.entries()].map(([key, value]) => [key, value.count]),
  );

  return { total, byType: byTypeBytes, counts: byTypeCounts };
}

export default function ResourceReporter() {
  React.useEffect(() => {
    let sent = false;

    const send = () => {
      if (sent) return;
      sent = true;

      const { total, byType, counts } = collectTotals();

      fetch('/api/visit/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({ totalBytes: total, byType, counts }),
      }).catch(() => {});
    };

    const timeoutId = window.setTimeout(send, 2000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') send();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      send();
    };
  }, []);

  return <React.Fragment></React.Fragment>;
}
