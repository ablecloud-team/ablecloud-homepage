'use client';

import { usePathname } from 'next/navigation';

import { ReactNode } from 'react';

import { bgGrayPage } from '@/constants/common';

export function MainWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isGrayPage = bgGrayPage.findIndex(v => pathname.startsWith(v)) > -1;

  return (
    <div className={`${isGrayPage ? 'bg-[#F9F9F9]' : 'bg-white'} min-h-screen`}>{children}</div>
  );
}
