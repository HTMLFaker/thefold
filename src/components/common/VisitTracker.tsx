'use client';
import React from 'react';

export default function VisitTracker() {
  React.useEffect(() => {
    fetch('/api/visit').catch(() => {});
  }, []);

  return <React.Fragment></React.Fragment>;
}
