import Link from 'next/link';

import { getPosts } from '@/util/getPost';

import { ContentWrapper } from '@/templates/common';

export default async function BlogList() {
  const { postsData } = await getPosts();

  return (
    <ContentWrapper type='resource'>
      <div className='flex justify-center animate-fade-in'>
        <div className='max-w-[960px] w-full flex flex-col text-[14px]'>
          <div className='flex items-center h-[40px] text-center border-t-2 border-[#202020] bg-[#f6f7f8] border-b border-b-[#eee]'>
            <div className='min-w-[70px]'>번호</div>
            <div className='flex-1'>제목</div>
          </div>
          {postsData.map(v => {
            return (
              <Link
                href={`/resource/blog/${v.metaData.id}`}
                key={v.metaData.id}
                className='flex items-center min-h-[40px] border-b border-b-[#eee]'>
                <div className='min-w-[70px] text-center'>{v.metaData.id}</div>
                <div className='flex-1'>{v.metaData.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  );
}
