import Image from 'next/image';

import { ProductContentData } from '@/types/products';

import Check from '@/public/icons/common/check.svg';

export function ProductContent({ productContentData }: { productContentData: ProductContentData }) {
  const { imgSrc, subDescriptions, description } = productContentData;

  return (
    <div className='flex flex-col gap-6 items-center md:py-8 lg:flex-row'>
      <div className='border border-[#DDD] bg-[#F6F7F8] px-[10px] py-4 md:px-6'>
        <Image src={imgSrc} alt={''} className='max-h-[400px] w-auto' />
      </div>
      <div className='flex flex-1 flex-col gap-6 text-[#707070]'>
        {description && <div>{description}</div>}
        {subDescriptions.map((text, idx) => {
          return (
            <div className='flex gap-1' key={idx}>
              <Check />
              <div className='flex-1'>{text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
