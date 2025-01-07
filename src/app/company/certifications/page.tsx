import Image from 'next/image';

import certificates1Src from '@/public/images/company/certificates-1.png';
import certificates2Src from '@/public/images/company/certificates-2.png';
import certificates3Src from '@/public/images/company/certificates-3.png';
import certificates4Src from '@/public/images/company/certificates-4.png';
import certificates5Src from '@/public/images/company/certificates-5.png';

export default function CompanyCertifications() {
  return (
    <div className='flex justify-center animate-fade-in w-full pt-8'>
      <div className='grid max-w-[1292px] gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-8 xl:gap-12 xl:grid-cols-5 items-start text-[#444] text-center text-[14px]'>
        <div className='flex flex-col gap-5 items-center'>
          <Image src={certificates1Src} alt='' className='border border-[#bcbcbc] shadow-md' />
          <div>소프트웨어품질인증서</div>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <Image src={certificates2Src} alt='' className='border border-[#bcbcbc] shadow-md' />
          <div>저작권 등록증</div>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <Image src={certificates3Src} alt='' className='border border-[#bcbcbc] shadow-md' />
          <div>
            HCI 부문 국내 기업 최초
            <br />
            가상화 관리
            <br />
            보안기능확인서
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <Image src={certificates4Src} alt='' className='border border-[#bcbcbc] shadow-md' />
          <div>
            HCI를 프로비저닝 하기 위한
            <br />
            시스템 및 방법
            <br />
            특허 획득
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <Image src={certificates5Src} alt='' className='border border-[#bcbcbc] shadow-md' />
          <div>기업부설연구소 인정서</div>
        </div>
      </div>
    </div>
  );
}
