'use client';

import { usePathname } from 'next/navigation';

import { bgGrayPage } from '@/constants/common';

import { Footer, Header } from '@/components/layout';

import './globals.css';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isGrayPage = bgGrayPage.findIndex(v => pathname.startsWith(v)) > -1;

  return (
    <html lang='ko'>
      <body>
        <div className={`${isGrayPage ? 'bg-[#F9F9F9]' : 'bg-white'} min-h-screen`}>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
