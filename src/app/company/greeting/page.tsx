import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import Fader from '@/components/main/Fader';

import Image from 'next/image';

export const metadata = {
  title: '인사말',
  description: '더폴드는 전문 기술력과 노하우로 연구, 개발, 제작, 납품, 시공',
};

export default function CompanyPage() {
  return (
    <div className="app">
      <Header />
      <section className="sub_visual_wrapper">
        <div className="sub_visual">
          <Fader intervalMs={[10000, 10000]}>
            <Image src={'/v3.jpg'} width={1920} height={655} alt={''} />
            <Image src={'/visual1.jpg'} width={1920} height={655} alt={''} />
          </Fader>
        </div>
      </section>
      <main className="main"></main>
      <Footer />
    </div>
  );
}
