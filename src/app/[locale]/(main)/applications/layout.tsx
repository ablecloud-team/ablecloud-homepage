import { applicationHeaderData, applicationsTabs } from '@/constants/applications';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { ScrollTop } from '@/components/layout';
import { Tabs } from '@/components/ui';

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollTop />
      <MainPageHeader headerData={applicationHeaderData} />
      <ContentWrapper type='applications'>
        <Tabs tabs={applicationsTabs} />
        {children}
      </ContentWrapper>
    </>
  );
}
