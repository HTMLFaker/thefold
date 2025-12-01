import { HomeClient } from '@/components/HomeClient';
import { UploadImageClient } from '@/components/UploadImageClient';
import Link from 'next/link';

export const metadata = {
  title: '더폴드 | 메인',
  description: '더폴드 공식 홈페이지 메인 페이지입니다.',
};

export default function HomePage() {
  return (
    <main>
      <h1>더폴드</h1>
      <p>환영합니다. 회사 홍보 사이트 메인 페이지입니다.</p>
      <p>
        <Link href="/about">회사소개</Link> / <Link href="/greeting">인사말</Link>
      </p>
      <HomeClient />
      <UploadImageClient />
    </main>
  );
}
