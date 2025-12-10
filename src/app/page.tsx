import { HomeClient } from '@/components/HomeClient';
import { UploadImageClient } from '@/components/UploadImageClient';
import Header from './_components/Header';
import React from 'react';
import Footer from './_components/Footer';
import VisualFader from '@/components/main/VisualFader';
import Image from 'next/image';

export const metadata = {
  title: '더폴드 | 메인',
  description: '더폴드 공식 홈페이지 메인 페이지입니다.',
};

export default function HomePage() {
  const items = [
    <button key="a" onClick={() => console.log('첫 번째 클릭')}>
      A
    </button>,
    <div key="b">B</div>,
    <div key="c">C</div>,
  ];

  return (
    <React.Fragment>
      <div className="wrapper main">
        <Header />

        <main className="main">
          <VisualFader />
          <div className="glass_visual_wrap">
            <div className="glass_animation">
              <Image src={'/a1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
              <Image src={'/a1.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
              <Image src={'/a2.jpg'} alt={''} width={1350} height={759} className={'img img3'} />
              <Image src={'/a3.jpg'} alt={''} width={1350} height={759} className={'img img4'} />
              <Image src={'/a4.jpg'} alt={''} width={1350} height={759} className={'img img5'} />
            </div>
            <div className="text_area">
              <h2 className="title">
                <span className="hash">#</span> 글라스 폴딩도어
              </h2>
              <p className="description">국내 최소 유리간격 2mm 적용</p>
            </div>
          </div>

          <div className="partition_visual_wrap">
            <div className="partition_animation">
              <Image src={'/b1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
              <Image src={'/b2.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
              <Image src={'/b3.jpg'} alt={''} width={1350} height={759} className={'img img3'} />
            </div>
            <div className="text_area">
              <h2 className="title">
                <span className="hash">#</span> 칸막이 폴딩도어
              </h2>
              <p className="description">
                인테리어 시트 마감으로
                <br /> 다양한 디자인
              </p>
            </div>
          </div>

          <div className="the_visual_wrap">
            <div className="the_animation">
              <Image src={'/c1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
              <Image src={'/c2.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
              <Image src={'/c1-1.png'} alt={''} width={1350} height={759} className={'img img3'} />
            </div>
            <div className="text_area">
              <h2 className="title">
                <span className="hash">#</span> the 폴딩도어
              </h2>
              <p className="description">
                다양한 유리성능 적용으로
                <br /> 실용성 극대화
              </p>
            </div>
          </div>

          {/* <div>
            <GlassFader intervalMs={[2000, 5000, 3000, 10000]}>
              <Image src={'/a1.jpg'} alt={''} width={1350} height={759} className={'img'} />
              <Image src={'/a1.jpg'} alt={''} width={1350} height={759} className={'img'} />
              <Image src={'/a2.jpg'} alt={''} width={1350} height={759} className={'img'} />
              <Image src={'/a3.jpg'} alt={''} width={1350} height={759} className={'img'} />
              <Image src={'/a4.jpg'} alt={''} width={1350} height={759} className={'img'} />
            </GlassFader>
          </div> */}
          <HomeClient />
          <UploadImageClient />
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
}
