import { ContentWrapper } from '@/templates/common';
import { EbookList } from '@/templates/resource';

export default function Ebook() {
  return (
    <ContentWrapper type='resource'>
      <EbookList />
    </ContentWrapper>
  );
}
