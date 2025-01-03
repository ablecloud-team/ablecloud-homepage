import { videosData } from '@/constants/resource';

import { ContentWrapper } from '@/templates/common';
import { VideoList } from '@/templates/resource';

export default function Video() {
  return (
    <div className='w-full mt-6'>
      <VideoList videosData={videosData} />
    </div>
  );
}
