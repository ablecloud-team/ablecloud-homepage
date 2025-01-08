import { ebooksData } from '@/constants/resource';

import { EbookList } from '@/templates/resource';

export default function Ebook() {
  return (
    <div className='flex justify-center animate-fade-in mt-6'>
      <EbookList ebooksData={ebooksData} />
    </div>
  );
}
