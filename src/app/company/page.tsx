import Fader from '@/components/main/Fader';
import Footer from '../_components/Footer';
import Header from '../_components/Header';
import Image from 'next/image';

export const metadata = {
  title: '회사소개',
  description: '폴딩도어 연구,개발,제작,납품,시공까지 한 번에 이게 진짜 폴딩도어다.',
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
