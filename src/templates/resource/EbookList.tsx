import Image from 'next/image';
import Link from 'next/link';

import { ebooksData } from '@/constants/resource';

export function EbookList() {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {ebooksData.map((v, idx) => {
          return (
            <Link
              key={idx}
              href={`/pdf/${v.href}`}
              target='_blank'
              className='flex flex-col rounded-[20px] border border-[#eee] max-w-[360px] transform transition duration-200 hover:scale-102 hover:shadow-sm'>
              <Image src={v.imgSrc} alt='' />
              <div className='flex flex-col gap-[6px] px-6 py-4'>
                <div className='text-[12px] text-[#919191]'>{v.type}</div>
                <div className='font-bold'>{v.title}</div>
                <div className='text-[14px]'>{v.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
