import { InterviewListData } from '@/types/interview';

export function InterViewList({ interviewList }: { interviewList: InterviewListData[] }) {
  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px] pb-5'>
        ABLESTACK을 통해 혁신을 이룩한 고객사
      </div>
      <div className='grid max-w-[1260px] w-full gap-x-3 gap-y-2 grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] justify-center'>
        {interviewList.map((v, idx) => (
          <div
            key={idx}
            className='flex justify-center flex-col gap-2 min-h-[150px] items-center px-6 py-4 bg-white rounded-[10px] border border-[#EBEEF5]'>
            {v.img}
          </div>
        ))}
      </div>
    </div>
  );
}
