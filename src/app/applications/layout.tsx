import { applicationHeaderData, applicationsTabs } from '@/constants/applications';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { Tabs } from '@/components/ui';

export default function ApplicationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainPageHeader headerData={applicationHeaderData} />
      <ContentWrapper type='applications'>
        <Tabs tabs={applicationsTabs} />
        {children}
      </ContentWrapper>
    </>
  );
}
