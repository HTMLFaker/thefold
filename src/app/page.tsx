import FadeSlideshow from '@/components/common/FadeSlideShow';
import FoldingLine from '@/components/common/FoldingLine';
import { HomeClient } from '@/components/HomeClient';
import { UploadImageClient } from '@/components/UploadImageClient';
import Header from './_components/Header';

export const metadata = {
  title: '더폴드 | 메인',
  description: '더폴드 공식 홈페이지 메인 페이지입니다.',
};

export default function HomePage() {
  return (
    <main className="main">
      <Header />

      <FadeSlideshow />

      {/* <div className="folding-wrapper">
        <FoldingLine width={1} height={20} />
      </div> */}

      <HomeClient />
      <UploadImageClient />
    </main>
  );
}
