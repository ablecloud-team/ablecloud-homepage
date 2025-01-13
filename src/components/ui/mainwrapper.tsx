'use client';

import { usePathname } from 'next/navigation';

import { ReactNode, useMemo } from 'react';

import { bgGrayPage } from '@/constants/common';

export function MainWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const bgColor = useMemo(() => {
    if (pathname.startsWith('/about')) return 'bg-[#161616]';

    if (bgGrayPage.findIndex(v => pathname.startsWith(v)) > -1) return 'bg-[#F9F9F9]';

    return 'bg-white';
  }, [pathname]);

  return <div className={`${bgColor} min-h-screen`}>{children}</div>;
}
