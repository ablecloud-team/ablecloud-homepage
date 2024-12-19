import Link from 'next/link';

import { Button } from '@/components/ui';

import { BlogData } from '@/types/resource';

export function HomeBlogCards({ postsData }: { postsData: BlogData[] }) {
  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
        에이블클라우드의 새로운 소식
      </div>
      <div className='flex w-full gap-6 overflow-x-auto scrollbar-hide'>
        {postsData.map(v => {
          return (
            <Link
              href={`/resource/blog/${v.metaData.id}`}
              key={v.metaData.id}
              className='min-w-[342px]'>
              <img
                src={v.metaData.mainImgSrc}
                className='w-[342px] h-[150px] object-cover rounded-[12px] border border-[#1E1E1E1A] border-opacity-10'
              />
              <div className='px-3 pt-4 pb-2'>
                <div className='flex-1 font-bold'>{v.metaData.title}</div>
                <div className='mt-2 text-[#aaa] text-[14px] font-medium'>
                  {v.metaData.updatedAt}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Button
        buttonData={{
          className: 'border border-[#202020]',
          text: '새로운 소식 더보기',
          href: '/resource/blog',
          color: 'white',
        }}
      />
    </div>
  );
}
