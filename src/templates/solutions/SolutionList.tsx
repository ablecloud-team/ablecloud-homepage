import Image from 'next/image';
import Link from 'next/link';

import { SolutionListData } from '@/types/solutions';

export function SolutionList({ solutionList }: { solutionList: SolutionListData[] }) {
  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-medium text-center text-[30px] leading-[43px] pb-5'>
        솔루션 유즈케이스
      </div>
      <div className='max-w-[1200px] grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-6 xl:grid-cols-3 xl:gap-y-8'>
        {solutionList.map((solution, idx) => {
          return (
            <Link
              href={`solutions/${solution.path}`}
              className='flex px-[5px] py-[7.5px] rounded-lg transform transition duration-150 md:hover:scale-102 md:hover:shadow-md'
              key={idx}>
              <div className='p-[10px]'>
                <Image alt='' src={solution.imgSrc} />
              </div>
              <div className='flex flex-col flex-1 gap-[6px] leading-[23px] pr-4 pl-[7px]'>
                <div className='font-bold'>{solution.title}</div>
                <div>{solution.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
