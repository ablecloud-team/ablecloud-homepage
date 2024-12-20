import { videosData } from '@/constants/resource';

import { ContentWrapper } from '@/templates/common';
import { VideoList } from '@/templates/resource';

export default function Video() {
  return (
    <ContentWrapper type='resource'>
      <VideoList videosData={videosData} />
    </ContentWrapper>
  );
}
