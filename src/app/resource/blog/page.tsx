import { getPosts } from '@/util/getPost';

import { ContentWrapper } from '@/templates/common';
import { BlogList } from '@/templates/resource';

export default async function Blog() {
  const { postsData } = await getPosts();

  // <div className=''>
  return (
    <div className='flex justify-center animate-fade-in mt-6'>
      <BlogList postsData={postsData} />
    </div>
  );
}
