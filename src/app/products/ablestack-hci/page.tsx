import { AblestackHCICardsData, ablestackHciHeaderData, ablestackList } from '@/constants/products';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { AblestackHCICards, AblestackHCIContentCards, AblestackList } from '@/templates/products';

export default function Ablestack() {
  return (
    <>
      <MainPageHeader headerData={ablestackHciHeaderData} />
      <ContentWrapper>
        <AblestackHCICards cardsData={AblestackHCICardsData} />
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-products-hci-content-wrapper bg-cover bg-no-repeat bg-center'>
        <AblestackHCIContentCards />
      </ContentWrapper>
      <ContentWrapper>
        <AblestackList ablestackList={ablestackList} type='hci' />
      </ContentWrapper>
    </>
  );
}
