import Fader from '@/components/main/Fader';
import Footer from '../_components/_common/Footer';
import Header from '../_components/_common/Header';
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
            <Image src={'/nuk1.jpg'} width={2560} height={1099} alt={''} />
            <Image src={'/nuk1.jpg'} width={2560} height={1099} alt={''} />
          </Fader>
        </div>
      </section>
      <main className="main"></main>
      <Footer />
    </div>
  );
}
