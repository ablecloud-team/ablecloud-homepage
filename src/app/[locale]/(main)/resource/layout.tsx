'use client';

import { usePathname } from 'next/navigation';

import { resourceHeaderData, resourceTabs } from '@/constants/resource';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { ScrollTop } from '@/components/layout';
import { Tabs } from '@/components/ui';

export default function ResourceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname.startsWith('/resource/blog/')) return children;

  return (
    <>
      <ScrollTop />
      <MainPageHeader headerData={resourceHeaderData} />
      <ContentWrapper type='resource'>
        <Tabs tabs={resourceTabs} />
        {children}
      </ContentWrapper>
    </>
  );
}
