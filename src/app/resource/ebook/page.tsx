import { ebooksData } from '@/constants/resource';

import { ContentWrapper } from '@/templates/common';
import { EbookList } from '@/templates/resource';

export default function Ebook() {
  return (
    <ContentWrapper type='resource'>
      <EbookList ebooksData={ebooksData} />
    </ContentWrapper>
  );
}
