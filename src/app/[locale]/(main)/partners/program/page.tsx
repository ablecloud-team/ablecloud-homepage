import Image from 'next/image';

import { partnerProgramHeaderData } from '@/constants/partners';

import { ContentWrapper, MainPageHeader } from '@/templates/common';

import { Button } from '@/components/ui';

import program1Src from '@/public/images/partners/program-1.png';
import program2Src from '@/public/images/partners/program-2.png';
import program3Src from '@/public/images/partners/program-3.png';
import program4Src from '@/public/images/partners/program-4.png';

const data = [
  {
    imgSrc: program1Src,
    title: '에이블클라우드 세미나 참석',
    description: (
      <>
        컨퍼런스, 세미나 참여
        <br />
        온/오프라인 교육 및 기술지원
      </>
    ),
  },
  {
    imgSrc: program2Src,
    title: '파트너 맞춤형 교육 지원(매 월)',
    description: (
      <>
        기본 과정 (1 Day Program)
        <br />
        심화 과정 (2 Part 과정으로 설치부터 PoC 실습까지)
      </>
    ),
  },
  {
    imgSrc: program3Src,
    title: '마케팅 및 영업 활동 지원',
    description: (
      <>
        영업 활동 지원
        <br />
        마케팅 프로그램 지원
      </>
    ),
  },
  {
    imgSrc: program4Src,
    title: 'Partner Day 개최/운영',
    description: '비즈니스 파트너 대상으로 매 년 1회 실시',
  },
];

export default function PartnerProgram() {
  return (
    <>
      <MainPageHeader headerData={partnerProgramHeaderData} />
      <ContentWrapper bgClassName='bg-[#171A20]'>
        <div className='flex flex-col gap-4 text-white items-center'>
          <div className='font-medium text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
            파트너쉽 프로그램 소개
          </div>
          <div className='partner-program-gradient-text text-center font-medium text-[16px] md:text-[18px]'>
            파트너사와 협력하기 위해 보다 유연하고 혁신적인 프로그램을 제안합니다.
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4'>
            {data.map((v, idx) => (
              <div key={idx} className='flex flex-col gap-2 text-center py-4'>
                <Image src={v.imgSrc} alt='' className='rounded-xl' />
                <div className='font-bold'>{v.title}</div>
                <div className='text-[14px] leading-[22px]'>{v.description}</div>
              </div>
            ))}
          </div>
          <Button text='문의하기' href='/contact' className='!bg-[#B26EFE] mt-3' />
        </div>
      </ContentWrapper>
    </>
  );
}
