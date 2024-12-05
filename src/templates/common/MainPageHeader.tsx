import { Button } from '@/components/ui';

import { HeaderData } from '@/types/header';

export function MainPageHeader({ headerData }: { headerData: HeaderData }) {
  const { title, description, bgClassName, heightClassName, buttonData } = headerData;

  return (
    <div
      className={`!flex items-center justify-center px-4 bg-cover bg-no-repeat bg-center text-white text-center break-keep mt-[62px] md:mt-0 ${bgClassName} ${heightClassName}`}>
      <div className='flex flex-col items-center'>
        <div className='text-[28px] leading-[36px] font-bold lg:text-[48px] lg:leading-[57.6px]'>
          {title.mainText}
          {title.subText && (
            <span className='text-[24px] leading-[28.8px] lg:text-[36px] lg:leading-[43.2px]'>
              {` ${title.subText}`}
            </span>
          )}
        </div>
        <div className='mt-[12px] font-medium text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] '>
          {description}
        </div>
        {buttonData && <Button buttonData={buttonData} />}
      </div>
    </div>
  );
}
