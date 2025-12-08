import FadeSlideshow from '@/components/common/FadeSlideShow';
import FoldingLine from '@/components/common/FoldingLine';
import { HomeClient } from '@/components/HomeClient';
import { UploadImageClient } from '@/components/UploadImageClient';
import Header from './_components/Header';
import { VisualLoader } from '@/components/common/VisualLoader';
import React from 'react';

export const metadata = {
  title: '더폴드 | 메인',
  description: '더폴드 공식 홈페이지 메인 페이지입니다.',
};

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="folding-wrapper">
        <FoldingLine width={2} height={40} />
      </div>
      <div className="wrapper">
        <VisualLoader />
        <Header />

        <main className="main">
          <FadeSlideshow />

          <HomeClient />
          <UploadImageClient />
        </main>

        <footer>
          asdf
          <br />
          askldfjsaljdfjksdasdf
          <br />
          asdf
          <br />
          asdf
          <br />
          asdf
          <br />
          asdf
          <br />
          asdf
          <br />
          asdf
          <br />
          asdf
          <br />
          asdf
          <br />
          asdf
          <br />
          asdf
          <br />
        </footer>
      </div>
    </React.Fragment>
  );
}
