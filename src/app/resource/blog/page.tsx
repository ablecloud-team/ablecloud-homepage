import Link from 'next/link';

import { getPosts } from '@/util/getPost';

import { ContentWrapper } from '@/templates/common';
import { BlogList } from '@/templates/resource';

export default async function BlogListPage() {
  const { postsData } = await getPosts();

  return (
    <ContentWrapper type='resource'>
      <div className='flex justify-center animate-fade-in'>
        <BlogList postsData={postsData} />
      </div>
    </ContentWrapper>
  );
}
