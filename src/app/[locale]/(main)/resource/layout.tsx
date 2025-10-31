'use client';

import { useResourceHeaderData, useResourceTabs } from '@/constants/resource';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { ScrollTop } from '@/components/layout';
import { Tabs } from '@/components/ui';

import { usePathname } from '@/i18n/routing';

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
      <MainPageHeader headerData={useResourceHeaderData()} />
      <ContentWrapper type='resource'>
        <Tabs tabs={useResourceTabs()} />
        {children}
      </ContentWrapper>
    </>
  );
}
