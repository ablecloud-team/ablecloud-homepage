import { ablestackHeaderData, ablestackList } from '@/constants/products';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { AblestackList } from '@/templates/products';

export default function Ablestack() {
  return (
    <>
      <MainPageHeader headerData={ablestackHeaderData} />
      <ContentWrapper>
        <AblestackList ablestackList={ablestackList} />
      </ContentWrapper>
    </>
  );
}
