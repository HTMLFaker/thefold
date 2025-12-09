'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const NAV_ITEMS = [
  {
    label: '회사 소개',
    path: '/company',
    submenu: [
      { label: '회사 소개', path: '/company' },
      { label: '인사말', path: '/company/greeting' },
      { label: '오시는 길', path: '/company/directions' },
      { label: '대리점 모집', path: '/company/dealers' },
    ],
  },
  {
    label: '제품 소개',
    path: '/products',
    submenu: [
      { label: '글라스 폴딩도어', path: '/products/glass-folding-door' },
      { label: '더 폴딩도어', path: '/products/the-folding-door' },
      { label: '단열 폴딩도어', path: '/products/insulated-folding-door' },
      { label: '칸막이 폴딩도어', path: '/products/partition-folding-door' },
    ],
  },
  {
    label: '시공 사례',
    path: '/cases',
    submenu: [
      { label: '글라스 폴딩도어', path: '/cases/glass-folding-door' },
      { label: '더 폴딩도어', path: '/cases/the-folding-door' },
      { label: '단열 폴딩도어', path: '/cases/insulated-folding-door' },
      { label: '칸막이 폴딩도어', path: '/cases/partition-folding-door' },
    ],
  },
  {
    label: '자료실',
    path: '/resources',
    submenu: [
      { label: '상세도면', path: '/resources/blueprints' },
      { label: '자재 승인 서류', path: '/resources/material-approval' },
      { label: '인증 서류', path: '/resources/certifications' },
      { label: '기타 공유 자료', path: '/resources/shared-files' },
    ],
  },
  {
    label: '견적 문의',
    path: '/inquiry',
    submenu: [
      { label: '견적 문의', path: '/inquiry' },
      { label: '납품 의뢰', path: '/inquiry/order-request' },
    ],
  },
];

const Navigation = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => setOpenIndex(index);

  const handleItemBlur = (e: React.FocusEvent<HTMLLIElement>) => {
    const currentItem = e.currentTarget;
    const next = e.relatedTarget as HTMLElement | null;
    if (next && currentItem.contains(next)) return;
    setOpenIndex(null);
  };

  return (
    <div className="menu_wrapper">
      <nav className="main_menu" aria-label="주요 메뉴" onMouseLeave={() => setOpenIndex(null)}>
        <ul className="lst">
          {NAV_ITEMS.map((menu, index) => (
            <li
              key={menu.path}
              className={`itm${openIndex === index ? ' is-open' : ''}`}
              onBlurCapture={handleItemBlur}
            >
              <button
                type="button"
                className="lnk"
                aria-haspopup="true"
                aria-expanded={openIndex === index}
                aria-controls={`submenu-${index}`}
                onClick={() => handleOpen(index)}
                onFocus={() => handleOpen(index)}
              >
                {menu.label}
              </button>
              <ul id={`submenu-${index}`} className="sub_lst">
                {menu.submenu.map((item) => (
                  <li key={item.path} className="sub_itm">
                    <Link href={item.path} className="sub_lnk">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="quick_menu" aria-label="퀵 메뉴">
        <ul className="lst">
          <li className="itm">
            <Link href="#" className="lnk" aria-label="고객문의">
              <span className="sp sp_question" />
            </Link>
          </li>
          <li className="itm">
            <Link href="#" className="lnk" aria-label="전화문의">
              <span className="sp sp_telephone" />
            </Link>
          </li>
          <li className="itm">
            <Link href="#" className="lnk" aria-label="오시는길">
              <span className="sp sp_placeholder" />
            </Link>
          </li>
          <li className="itm">
            <Link href="#" className="lnk" aria-label="관리자">
              <span className="sp sp_user" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
