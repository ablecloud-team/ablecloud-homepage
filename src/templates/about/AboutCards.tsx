import Image from 'next/image';

import { AboutCardData } from '@/types/about';

interface AboutCardsProps {
  title: string;
  girdColsClassName: string;
  cardsData: AboutCardData[];
}

export function AboutCards({ title, girdColsClassName, cardsData }: AboutCardsProps) {
  return (
    <div className='flex flex-col gap-8 text-white'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
        {title}
      </div>
      <div className={`grid ${girdColsClassName} py-[10px] gap-5`}>
        {cardsData.map((v, idx) => (
          <div
            key={idx}
            className='flex flex-col items-center bg-[#1B1B1B] border border-[#333] rounded-[20px] text-center py-[25px] px-[39px] gap-[15px]'>
            <Image src={v.imgSrc} alt='' />
            <div>{v.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
