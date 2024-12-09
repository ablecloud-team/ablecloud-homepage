import { ProductsHeaderData } from '@/types/header';

export function ProductHeader({ headerData }: { headerData: ProductsHeaderData }) {
  const {
    bgClassName,
    description,
    title,
    descriptionMaxWidth,
    contentMaxWidth = 'max-w-[700px]',
  } = headerData;

  return (
    <div
      className={`flex items-center justify-center px-8 md:px-4 bg-cover bg-no-repeat bg-center text-white text-center break-keep md:pt-[60px] min-h-[350px] lg:min-h-[434px] ${bgClassName}`}>
      <div
        className={`flex flex-col items-start justify-center text-start ${contentMaxWidth} w-full`}>
        <div className='text-[28px] leading-[36px] font-bold lg:text-[48px] lg:leading-[57.6px]'>
          {title}
        </div>
        <div
          className={`mt-[12px] font-medium text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px] ${descriptionMaxWidth} w-full`}>
          {description}
        </div>
      </div>
    </div>
  );
}
