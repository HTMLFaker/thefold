'use client';

import React from 'react';

export function HomeClient() {
  const handleInsert = async () => {
    const res = await fetch('/api/db-insert', {
      method: 'POST',
    });

    const data = await res.json();
    console.log('insert result:', data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <p>
      <button onClick={handleInsert}>Insert Document</button>
    </p>
  );
}
