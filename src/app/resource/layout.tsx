import { resourceHeaderData, resourceTabs } from '@/constants/resource';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { Tabs } from '@/components/layout';

export default function ResourceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainPageHeader headerData={resourceHeaderData} />
      <ContentWrapper type='resource'>
        <Tabs tabs={resourceTabs} />
        {children}
      </ContentWrapper>
    </>
  );
}
