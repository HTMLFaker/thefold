import FadeSlideshow from '@/components/common/FadeSlideShow';
import FoldingLine from '@/components/common/FoldingLine';
import Swiper from '@/components/common/Swiper';
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
      <FadeSlideshow />
      {/* <Swiper
        isArrow
        isBounce
        isPaginate
        isAutoRolling={false}
        rollingSeconds={2}
        duration={0.5}
        moveRange={0.3}
        sensitivity={0.5}
      ></Swiper> */}

      <h1>더폴드</h1>
      <header className="header">
        <div className="logow">
          <h1 className="logo">THE FOLD</h1>
          <p className="slogan">Open Your Space</p>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link href="#">회사소개</Link>
            </li>
            <li>
              <Link href="#">제품소개</Link>
            </li>
            <li>
              <Link href="#">시공사례</Link>
            </li>
            <li>
              <Link href="#">자료실</Link>
            </li>
            <li>
              <Link href="#">견적문의</Link>
            </li>
          </ul>
        </nav>
        <div className="quick_menu">
          <ul>
            <li>
              <img src="/question.png" alt="" />
            </li>
            <li>
              <img src="/telephone.png" alt="" />
            </li>
            <li>
              <img src="/placeholder.png" alt="" />
            </li>
            <li>
              <img src="/user.png" alt="" />
            </li>
          </ul>
        </div>
      </header>

      <div className="folding-wrapper">
        <FoldingLine width={1} height={20} />
      </div>

      <p>
        <Link href="/about">회사소개</Link> / <Link href="/greeting">인사말</Link>
      </p>
      <HomeClient />
      <UploadImageClient />
    </main>
  );
}
