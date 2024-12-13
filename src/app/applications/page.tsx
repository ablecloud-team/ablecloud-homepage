import { applicationHeaderData, applicationList } from '@/constants/applications';

import { ApplicationList } from '@/templates/applications';
import { ContentWrapper, MainPageHeader } from '@/templates/common';

export default function Applications() {
  return (
    <>
      <MainPageHeader headerData={applicationHeaderData} />
      <ContentWrapper type='applications'>
        <ApplicationList applicationList={applicationList} />
      </ContentWrapper>
    </>
  );
}
