import { getPosts } from '@/util/getPost';

import { ContentWrapper } from '@/templates/common';
import { BlogList } from '@/templates/resource';

export default async function Blog() {
  const { postsData } = await getPosts();

  return (
    <div className='w-full mt-6'>
      <BlogList postsData={postsData} />
    </div>
  );
}
