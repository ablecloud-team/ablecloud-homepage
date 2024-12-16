import { InterviewListData } from '@/types/interview';

export function InterViewList({ interviewList }: { interviewList: InterviewListData[] }) {
  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-bold text-center text-[30px] leading-[43px] pb-5'>
        ABLESTACK을 통해 혁신을 이룩한 고객사례
      </div>
      <div className='grid grid-cols-7 gap-x-3 gap-y-2'>
        {interviewList.map((v, idx) => (
          <div
            key={idx}
            className='flex flex-col gap-2 items-center px-6 py-4 bg-white rounded-[10px] border border-[#EBEEF5]'>
            <div className='w-[120px] h-[66px] flex items-center justify-center'>{v.img}</div>
            <div className='text-[#444444]'>{v.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
