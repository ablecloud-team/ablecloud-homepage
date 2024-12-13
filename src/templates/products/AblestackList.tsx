import Link from 'next/link';

import { AblestackListData } from '@/types/products';

import ArrowUp from '@/public/icons/common/arrow-up.svg';

export function AblestackList({ ablestackList }: { ablestackList: AblestackListData[] }) {
  return (
    <div className='flex flex-col gap-[30px]'>
      {ablestackList.map((item, idx) => {
        return (
          <div className='flex flex-col gap-6' key={idx}>
            <div className='flex items-center max-w-[342px] w-full text-sm py-[10px] px-[14px] font-bold bg-[#202020] rounded-[5px] text-white cursor-pointer'>
              <div className='flex-1'>{item.title}</div>
              <ArrowUp />
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max:grid-cols-4'>
              {item.ablestackService.map((service, i) => {
                return (
                  <Link
                    key={i}
                    href={`/products/ablestack/${service.path}`}
                    className='flex flex-col gap-[6px] p-4 border border-[#EEE] rounded-[10px] transform transition duration-200 hover:scale-102 hover:shadow-md'>
                    <div className='text-[14px] text-[#926CFF] font-bold leading-[22px]'>
                      {service.description}
                    </div>
                    <div className='text-[18px] font-bold leading-[30px]'>{service.title}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
