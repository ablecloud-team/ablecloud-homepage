import Image from 'next/image';

import VMDetailSrc from '@/public/images/products/vm-detail.png';

export function AblestackVMDetail() {
  return (
    <div className='flex flex-col gap-3 text-center'>
      <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px] '>
        클라우드 환경으로 전환하기 위한 혁신적 가상화 플랫폼
      </div>
      <div>
        기업 및 데이터센터의 인프라를 가상화 하고, 클라우드 환경으로 전환하기 위한 혁신적 가상화
        플랫폼으로 단순한 라이선스 모델에 다양한 가상화 및 클라우드 기능을 제공합니다.
      </div>
      <div className='flex justify-center bg-[#F9F9F9] py-[38px] px-2'>
        <Image src={VMDetailSrc} alt='' />
      </div>
    </div>
  );
}
