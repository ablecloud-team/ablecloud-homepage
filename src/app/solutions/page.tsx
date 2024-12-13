import { solutionHeaderData, solutionList } from '@/constants/solutions';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { SolutionList } from '@/templates/solutions';

export default function Solutions() {
  return (
    <>
      <MainPageHeader headerData={solutionHeaderData} />
      <ContentWrapper type='solutions'>
        <SolutionList solutionList={solutionList} />
      </ContentWrapper>
    </>
  );
}
