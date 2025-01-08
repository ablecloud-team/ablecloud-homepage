import { Button } from '@/components/ui';

import { HomeFooterCardData } from '@/types/home';

interface HomeFooterCardsProps {
  cardsData: HomeFooterCardData[];
}

export function HomeFooterCards({ cardsData }: HomeFooterCardsProps) {
  return (
    <div className='flex w-full gap-4 md:gap-6 overflow-x-auto scrollbar-hide'>
      {cardsData.map((cardData, idx) => {
        return (
          <div
            key={idx}
            className={`flex flex-col gap-[9px] ${cardData.bgColor} min-w-[342px] py-5 px-6 rounded-[12px] text-white`}>
            <div className='font-bold text-[15px] leading-[22px]'>{cardData.category}</div>
            <div className='font-bold text-[20px] leading-[30px]'>{cardData.text}</div>
            <div className='flex mb-[11px]'>
              <Button buttonData={cardData.buttonData} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
