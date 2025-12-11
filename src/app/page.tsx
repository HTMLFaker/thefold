import { HomeClient } from '@/components/HomeClient';
import { UploadImageClient } from '@/components/UploadImageClient';
import Header from './_components/Header';
import React from 'react';
import Footer from './_components/Footer';
import VisualFader from '@/components/main/VisualFader';
import Image from 'next/image';
import MovieControl from '@/components/domControls/MovieControl';

import About from '@/components/main/About';
import Count from '@/components/main/Count';
import Special from '@/components/main/Special';

export const metadata = {
  title: '더폴드 | 메인',
  description: '더폴드 공식 홈페이지 메인 페이지입니다.',
};

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="wrapper main">
        <Header />
        <section className="visual_wrapper">
          <VisualFader />
        </section>
        <main className="main_wrapper">
          <section className="main_inner">
            <About />
            <Count />
            <Special />

            <div className="card_movie glass">
              <div className="movie_area">
                <Image src={'/a1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
                <Image src={'/a1.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
                <Image src={'/a2.jpg'} alt={''} width={1350} height={759} className={'img img3'} />
                <Image src={'/a3.jpg'} alt={''} width={1350} height={759} className={'img img4'} />
                <Image src={'/a4.jpg'} alt={''} width={1350} height={759} className={'img img5'} />
              </div>
              <div className="text_area">
                <div className="text_inner">
                  <h2 className="title">
                    <span className="hash">#</span> 글라스 폴딩도어
                  </h2>
                  <p className="description">
                    <span>국내 최소 유리간격</span> <span>2mm 적용</span>
                  </p>
                  <p className="action">
                    <a href="#" className="btn">
                      제품소개
                    </a>
                    <a href="#" className="btn">
                      시공사례
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card_movie partition">
              <div className="movie_area">
                <Image src={'/b1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
                <Image src={'/b2.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
                <Image src={'/b3.jpg'} alt={''} width={1350} height={759} className={'img img3'} />
              </div>
              <div className="text_area">
                <div className="text_inner">
                  <h2 className="title">
                    <span className="hash">#</span> 칸막이 폴딩도어
                  </h2>
                  <p className="description">
                    <span>인테리어 시트 마감으로</span> <span>다양한 디자인</span>
                  </p>
                  <p className="action">
                    <a href="#" className="btn">
                      제품소개
                    </a>
                    <a href="#" className="btn">
                      시공사례
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card_movie the">
              <div className="movie_area">
                <Image src={'/c1.jpg'} alt={''} width={1350} height={759} className={'img img1'} />
                <Image src={'/c2.jpg'} alt={''} width={1350} height={759} className={'img img2'} />
                <Image
                  src={'/c1-1.png'}
                  alt={''}
                  width={1350}
                  height={759}
                  className={'img img3'}
                />
              </div>
              <div className="text_area">
                <div className="text_inner">
                  <h2 className="title">
                    <span className="hash">#</span> the 폴딩도어
                  </h2>
                  <p className="description">
                    <span>다양한 유리성능 적용으로</span> <span>실용성 극대화</span>
                  </p>
                  <p className="action">
                    <a href="#" className="btn">
                      제품소개
                    </a>
                    <a href="#" className="btn">
                      시공사례
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <MovieControl />

            <HomeClient />
            <UploadImageClient />
          </section>
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
}
