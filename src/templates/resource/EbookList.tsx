'use client';

import Image from 'next/image';

import { useMemo, useState } from 'react';

import { Pagination } from '@/components/ui';

import { EbookData } from '@/types/resource';

import { Link } from '@/i18n/routing';

const LIMIT = 12;

export function EbookList({ ebooksData, origin }: { ebooksData: EbookData[]; origin: string }) {
  const [page, setPage] = useState<number>(1);

  const ebookList = useMemo(() => {
    const chunkedArray = [];

    for (let i = 0; i < ebooksData.length; i += LIMIT) {
      chunkedArray.push(ebooksData.slice(i, i + LIMIT));
    }

    return chunkedArray[page - 1];
  }, [ebooksData, page]);

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='grid w-full max-w-[1185px] grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {ebookList.map((v, idx) => {
          const cardClassName =
            'flex w-full min-w-0 max-w-[379px] flex-col rounded-[20px] border border-[#eee] transition duration-200 hover:scale-102 hover:shadow-sm';
          const card = (
            <>
              <Image src={v.imgSrc} alt='' className='h-[220px] w-full rounded-t-[20px] object-cover' />
              <div className='flex flex-col gap-[10px] p-6'>
                <div className='text-[12px] leading-[1.3] text-[#919191]'>{v.type}</div>
                <div className='text-[16px] font-bold leading-[1.3]'>{v.title}</div>
                <div className='text-[14px] leading-[22px]'>{v.description}</div>
                <div className='text-[12px] leading-[1.3] text-[#9B9B9B]'>({v.date})</div>
              </div>
            </>
          );

          if (!v.href) {
            return <div key={idx} className={cardClassName}>{card}</div>;
          }

          return (
            <Link
              key={idx}
              href={`${origin}/pdf/${v.href}`}
              target='_blank'
              className={cardClassName}>
              {card}
            </Link>
          );
        })}
      </div>
      <Pagination count={ebooksData.length} limit={LIMIT} page={page} setPage={setPage} />
    </div>
  );
}
