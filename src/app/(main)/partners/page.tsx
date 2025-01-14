import { partnersHeaderData, partnersTier } from '@/constants/partners';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { PartnerList } from '@/templates/partners';

export default function Partners() {
  return (
    <>
      <MainPageHeader headerData={partnersHeaderData} />
      <ContentWrapper bgClassName='bg-[#171A20]'>
        <div className='flex flex-col gap-4 text-white items-center'>
          <div className='font-medium text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
            함께 성공하는 미래
          </div>
          <div className='partners-gradient-text text-center font-medium text-[16px] md:text-[18px]'>
            독자적인 기술력, 지속 가능한 수익창출. <br /> ABLESTACK 플랫폼 설계 및 글로벌 성장을
            위해 가상화/클라우드 시장의 공동 성장을 만들어갈 파트너를 찾습니다.
          </div>
          <div className='max-w-[828px] text-center'>
            {partnersTier.map((v, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-2 py-4 ${idx === 0 ? 'border-y border-y-[#eeeeee14]' : 'border-b border-b-[#eeeeee14] '}`}>
                <div className='font-bold text-[16px] md:text-[18px]'>{v.title}</div>
                <div className='text-[14px] md:text-[16px] leading-[22px]'>{v.description}</div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-[#F6F7F8]'>
        <PartnerList />
      </ContentWrapper>
    </>
  );
}
