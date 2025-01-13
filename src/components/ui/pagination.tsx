import { Dispatch, SetStateAction } from 'react';

import ChevronLeft from '@/public/icons/common/chevron-left.svg';
import ChevronRight from '@/public/icons/common/chevron-right.svg';

interface PaginationProps {
  count: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({ count, limit, page, setPage }: PaginationProps) {
  const totalPages = Math.ceil(count / limit);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  if (totalPages == 1) return <></>;

  return (
    <div className='flex items-center justify-center space-x-2 mt-4'>
      <div
        className='p-1 cursor-pointer'
        onClick={() => {
          if (page === 1) return;

          handlePageChange(page - 1);
        }}>
        <ChevronLeft width={22} />
      </div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
        <button
          key={pageNum}
          className={`w-[32px] h-[32px] rounded ${pageNum === page ? 'border border-[#117CE9] text-[#0085F2] bg-[#EEF4FB]' : 'bg-white'}`}
          onClick={() => handlePageChange(pageNum)}>
          {pageNum}
        </button>
      ))}
      <div
        className='p-1 cursor-pointer'
        onClick={() => {
          if (page === totalPages) return;

          handlePageChange(page + 1);
        }}>
        <ChevronRight width={22} />
      </div>
    </div>
  );
}
