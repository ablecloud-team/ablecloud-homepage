import { AblestackVMCardsData, ablestackList, ablestackVmHeaderData } from '@/constants/products';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import {
  AbleStackVMMigration,
  AblestackList,
  AblestackVMCards,
  AblestackVMDetail,
} from '@/templates/products';

export default function AbleVM() {
  return (
    <>
      <MainPageHeader headerData={ablestackVmHeaderData} />
      <ContentWrapper>
        <AblestackVMCards cardsData={AblestackVMCardsData} />
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-[#292929]'>
        <AbleStackVMMigration />
      </ContentWrapper>
      <ContentWrapper>
        <AblestackVMDetail />
      </ContentWrapper>
      <ContentWrapper isNonePaddingTop={true}>
        <AblestackList ablestackList={ablestackList.filter(v => v.path !== 'glue')} type='vm' />
      </ContentWrapper>
    </>
  );
}
