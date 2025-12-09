'use client';

import Image from 'next/image';
import React from 'react';

type Slide = {
  image: string;
  tag: string;
  title: string;
  description1: string;
  description2: string;
};

const slides: Slide[] = [
  {
    image: '/visual1.jpg',
    tag: '#글라스폴딩도어',
    title: '투명하게 여는 개방감',
    description1: '글라스 폴딩도어로 공간을 잇고',
    description2: '시야를 넓혀 보세요',
  },
  {
    image: '/visual2.jpg',
    tag: '#칸막이폴딩도어',
    title: '공간을 나누는 새로운 방식',
    description1: '칸막이 폴딩도어로 공간을 나누면서도',
    description2: '개방감과 디자인을 놓치지 마세요',
  },
  {
    image: '/visual3.jpg',
    tag: '#일반폴딩도어',
    title: '튼튼함과 실용성의 기본',
    description1: '견고함과 실용성으로 어떤 공간에도',
    description2: '안정적인 분리를 제공합니다',
  },
];

const VisualFader = () => {
  const [index, setIndex] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, 100);

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => {
      clearTimeout(startTimer);
      clearInterval(id);
    };
  }, []);

  return (
    <React.Fragment>
      <section className="visual_wrapper" aria-labelledby="visual-heading">
        {slides.map((slide, i) => {
          const isActive = started && index === i;
          return (
            <div
              key={slide.image}
              aria-hidden="true"
              className={`visual_slide ${isActive ? 'active' : ''}`}
            >
              <div className={`visual_img ${isActive ? 'zoom' : ''}`}>
                <Image
                  src={slide.image}
                  alt={''}
                  width={1920}
                  height={1200}
                  className={'img'}
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
              <div className="copy-wrapper">
                <p className={`copy-tag ${isActive ? 'active' : ''}`}>{slide.tag}</p>
                <h2 className={`copy-title ${isActive ? 'active' : ''}`}>{slide.title}</h2>
                <p className={`copy-desc ${isActive ? 'active' : ''}`}>
                  <span>{slide.description1}</span>
                  <span>{slide.description2}</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default VisualFader;
