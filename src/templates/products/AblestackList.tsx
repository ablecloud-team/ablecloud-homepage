import Link from 'next/link';

import { AblestackService } from '@/types/products';

import AblestackHCI from '@/public/icons/common/ablestack-hci.svg';
import AblestackVM from '@/public/icons/common/ablestack-vm.svg';

interface AblestackListProps {
  type: 'hci' | 'vm';
  ablestackList: AblestackService[];
}

export function AblestackList({ ablestackList, type }: AblestackListProps) {
  return (
    <div className='flex flex-col gap-[30px]'>
      <div className='flex flex-col justify-center gap-2 items-center xsm:flex-row xsm:gap-[10px] font-bold text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
        {type === 'vm' ? (
          <AblestackVM className='max-w-[180px] xsm:max-w-[200px] md:max-w-[250px]' />
        ) : (
          <AblestackHCI className='max-w-[180px] xsm:max-w-[200px] md:max-w-[250px]' />
        )}
        구성 요소
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max:grid-cols-4'>
        {ablestackList.map((service, idx) => {
          return (
            <Link
              key={idx}
              href={`/products/service/${service.path}`}
              className='flex flex-col gap-[6px] p-4 border border-[#EEE] rounded-[10px] transform transition duration-200 hover:scale-102 hover:shadow-md'>
              <div
                className={`text-[14px] ${type === 'vm' ? 'text-[#FC8E4B]' : 'text-[#926CFF]'} font-bold leading-[22px]`}>
                {service.description}
              </div>
              <div className='text-[18px] font-bold leading-[30px]'>{service.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
