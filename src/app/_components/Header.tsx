import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header is_top" id="headerController">
      <div className="header_inner">
        <Link href="/" className="header_brand" aria-label="THE FOLD 홈으로 이동">
          <h1 className="title">THE FOLD</h1>
          <p className="slogan">이게 진짜 폴딩도어다!</p>
        </Link>
        <nav className="main_menu" aria-label="주요 메뉴">
          <ul className="lst">
            <li className="itm">
              <Link href="/about" className="lnk">
                회사소개
              </Link>
            </li>
            <li className="itm">
              <Link href="/greeting" className="lnk">
                제품소개
              </Link>
            </li>
            <li className="itm">
              <Link href="#" className="lnk">
                시공사례
              </Link>
            </li>
            <li className="itm">
              <Link href="#" className="lnk">
                자료실
              </Link>
            </li>
            <li className="itm">
              <Link href="#" className="lnk">
                견적문의
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="quick_menu" aria-label="퀵 메뉴">
          <ul className="lst">
            <li className="itm">
              <Link href="#" className="lnk" aria-label="고객문의">
                <Image src={'/question.png'} alt={''} width={30} height={30} className={'img'} />
              </Link>
            </li>
            <li className="itm">
              <Link href="#" className="lnk" aria-label="전화문의">
                <Image src={'/telephone.png'} alt={''} width={30} height={30} className={'img'} />
              </Link>
            </li>
            <li className="itm">
              <Link href="#" className="lnk" aria-label="오시는길">
                <Image src={'/placeholder.png'} alt={''} width={30} height={30} className={'img'} />
              </Link>
            </li>
            <li className="itm">
              <Link href="#" className="lnk" aria-label="관리자">
                <Image src={'/user.png'} alt={''} width={30} height={30} className={'img'} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
