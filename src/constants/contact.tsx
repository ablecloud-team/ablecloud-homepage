import { HeaderData } from '@/types/header';

export const contactHeaderData: HeaderData = {
  title: {
    mainText: '문의',
  },
  description: (
    <>
      에이블클라우드의 제품 및 솔루션/ 파트너
      <br /> 문의를 남겨주시면 신속하고 정확하게 답변 드리겠습니다.
    </>
  ),
  bgClassName: 'bg-contact-header',
  heightClassName: 'min-h-[350px] lg:min-h-[374px]',
};
