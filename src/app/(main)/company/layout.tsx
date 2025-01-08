import { companyHeaderData, companyTabs } from '@/constants/company';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { ScrollTop } from '@/components/layout';
import { Tabs } from '@/components/ui';

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollTop />
      <MainPageHeader headerData={companyHeaderData} />
      <ContentWrapper type='company'>
        <Tabs tabs={companyTabs} />
        {children}
      </ContentWrapper>
    </>
  );
}
