import { Metadata } from 'next';

import { Footer, Header } from '@/components/layout';
import { MainWrapper } from '@/components/ui';

import '../globals.css';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const metadata: Metadata = {
  title: '에이블클라우드',
  description: '에이블클라우드는 가상화 및 클라우드(HCI) 전문업체입니다.',
  keywords: '에이블클라우드, ABLECLOUD, 에이블스택, ABLESTACK, 가상화, HCI',
  openGraph: {
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainWrapper>
        <Header />
        {children}
      </MainWrapper>
      <Footer />
    </>
  );
}
