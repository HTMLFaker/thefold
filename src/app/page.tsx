import { HomeClient } from '@/components/HomeClient';
import { UploadImageClient } from '@/components/UploadImageClient';
import Header from './_components/Header';
import React from 'react';
import Footer from './_components/Footer';
import VisualFader from '@/components/main/VisualFader';

import AboutUs from '@/components/main/AboutUs';
import ConstructionCount from '@/components/main/ConstructionCount';
import Special from '@/components/main/Special';
import Movie from '@/components/main/Movie';
import MovieControl from '@/components/domControls/MovieControl';
import Inquiry from '@/components/main/Inquiry';

export const metadata = {
  title: '더폴드 | 메인',
  description: '더폴드 공식 홈페이지 메인 페이지입니다.',
};

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <section className="visual_wrapper">
          <VisualFader />
        </section>
        <main className="main_wrapper">
          <section className="main_inner">
            <AboutUs />
            <ConstructionCount />
            <Special />
            <Inquiry />
            <Movie />
            <MovieControl />

            {/* <HomeClient />
            <UploadImageClient /> */}
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
