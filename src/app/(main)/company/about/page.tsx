import Image from 'next/image';

import { companyAboutCardsData } from '@/constants/company';

export default function CompanyAbout() {
  return (
    <div className='animate-fade-in w-full pt-8 text-[#222]'>
      <div className='flex flex-col md:flex-row bg-[#F9F9F9] px-5 py-6 md:px-10 md:py-9 rounded-[20px] gap-[60px] lg:gap-[120px]'>
        <div className='flex flex-col justify-center gap-[19px] max-w-full md:max-w-[286px] w-full'>
          <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
            CLOUD PLATFORM
          </div>
          <div>에이블클라우드는 통합, 단순함, 자율성으로 혁신을 만듭니다.</div>
        </div>
        <div className='leading-[30px] tracking-tighter'>
          (주)에이블클라우드 홈페이지에 방문해주셔서 감사합니다.
          <br />
          <br />
          시스템 통합, SW개발, HW공급, 콘텐츠 개발을 수행하는 전문 IT기업으로서 축적된 전문지식과
          우수한 솔루션 제품, 유수기업과 전략적 제휴 등 고객 경쟁력 강화를 위하여 끊임 없이 노력하는
          IT 토털 솔루션 공급업체입니다.
          <br />
          최신 IT 기술 전반에 걸친 기술력을 바탕으로 공공/서비스/기업 부문에 있어 정보시스템과
          솔루션 개발 및 시스템 공급을 통하여 최고의 가치를 제공하고 있습니다.기업의 지속적인 성장을
          통하여 고객과의 신뢰를 더욱 굳건히 하겠습니다. 감사합니다.
          <div className='text-[18px] leading-[24px] font-bold'>
            <br />
            <br />
            대표  권 민 길 & 박 동 혁
          </div>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row md:px-10 pt-6 gap-[30px] xl:gap-[120px]'>
        <div className='flex flex-col justify-center gap-[19px] max-w-full md:max-w-[286px] w-full px-5 md:px-0'>
          <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
            ALL ABOUT DATA & CLOUD
          </div>
          <div>에이블클라우드는 새로운 플랫폼으로 언제나 무한한 가능성을 봅니다.</div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]'>
          {companyAboutCardsData.map((v, idx) => (
            <div
              key={idx}
              className={`${v.bgClassName} flex flex-col gap-4 p-6 text-white bg-cover bg-no-repeat bg-center rounded-[20px]`}>
              <Image src={v.imgSrc} alt='' className='pt-8' />
              <div className='text-[20px] md:text-[24px] font-bold'>{v.title}</div>
              <div className='text-[14px] md:text-[16px] tracking-tighter'>{v.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
