import Navigation from '@/components/common/Navigation';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header is_top" id="headerController">
      <button aria-hidden="true" type="button" className="btn_header_toggle" id="headerMenuButton">
        <span className="sp sp_menu" />
      </button>
      <div className="header_inner">
        <Link href="/" className="header_brand" aria-label="THE FOLD 홈으로 이동">
          <h1 className="title">THE FOLD</h1>
          <p className="slogan">이게 진짜 폴딩도어다!</p>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
