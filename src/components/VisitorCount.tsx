'use client';
import React from 'react';

export default function VisitorCount() {
  const [todayCount, setTodayCount] = React.useState<number | null>(null);
  const [totalCount, setTotalCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    fetch('/api/visit')
      .then((r) => r.json())
      .then((d) => {
        setTodayCount(d.todayCount);
        setTotalCount(d.totalCount);
      })
      .catch(() => {
        setTodayCount(null);
        setTotalCount(null);
      });
  }, []);

  return (
    <React.Fragment>
      <div>오늘 방문자수: {todayCount ?? '-'}</div>
      <div>누적 방문자수: {totalCount ?? '-'}</div>
    </React.Fragment>
  );
}
