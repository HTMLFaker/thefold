import type { Metadata } from 'next';
import '@/styles/index.scss';
import VisitTracker from '@/components/common/VisitTracker';

export const metadata: Metadata = {
  metadataBase: new URL('https://thefold.kr'),
  title: {
    default: '더폴드 | 글라스 폴딩도어 시공 전문업체',
    template: '%s | 더폴드',
  },
  description:
    '더폴드는 글라스 폴딩도어, 폴딩도어 시공 전문업체로, 상가·주택·카페 등 다양한 공간에 맞춤형 시공 서비스를 제공합니다. 품질과 디자인으로 공간의 가치를 높입니다.',
  keywords: [
    '더폴드',
    '폴딩도어',
    '글라스 폴딩도어',
    '폴딩도어 시공',
    '폴딩도어 설치',
    '카페 폴딩도어',
    '상가 폴딩도어',
  ],
  applicationName: '더폴드 TheFold',
  creator: 'TheFold Web Team',
  publisher: '더폴드 주식회사',
  authors: [{ name: 'htmlfaker', url: '' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // openGraph: {
  //   type: 'website',
  //   locale: 'ko_KR',
  //   url: 'https://thefold.kr',
  //   siteName: '더폴드',
  //   title: '더폴드 | 글라스 폴딩도어 시공 전문업체',
  //   description:
  //     '상가·주택·카페용 글라스 폴딩도어 전문 시공 업체 더폴드. 품질과 디자인으로 공간의 가치를 높입니다.',
  //   images: [
  //     {
  //       url: '/og-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: '더폴드 폴딩도어 시공 이미지',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: '더폴드 | 글라스 폴딩도어 시공 전문업체',
  //   description:
  //     '더폴드는 상가·주택·카페 폴딩도어 시공 전문업체로 품질과 디자인을 최우선으로 합니다.',
  //   images: ['/og-image.jpg'],
  // },
  // alternates: {
  //   canonical: 'https://thefold.kr',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <VisitTracker />
      <body>{children}</body>
    </html>
  );
}
