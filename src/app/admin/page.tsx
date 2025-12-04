'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import VisitorCount from '@/components/VisitorCount';

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session === null) {
        router.replace('/admin/login');
        return;
      }

      setEmail(session.user.email ?? null);
      setLoading(false);
    };

    void checkSession();
  }, [router]);

  if (loading) {
    return (
      <React.Fragment>
        <p>로딩 중...</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <main style={{ maxWidth: 800, margin: '80px auto' }}>
        <h1 style={{ marginBottom: 16 }}>Admin Dashboard</h1>
        <p style={{ marginBottom: 24 }}>
          로그인된 관리자: <strong>{email ?? '알 수 없음'}</strong>
        </p>
        <button
          type="button"
          onClick={async () => {
            await supabase.auth.signOut();
            router.replace('/admin/login');
          }}
        >
          로그아웃
        </button>

        <VisitorCount />
      </main>
    </React.Fragment>
  );
}
