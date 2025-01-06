import { partnerList } from '@/constants/partners';

export function PartnerList() {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
        제조사 파트너
      </div>
      <div>현재 에이블클라우드와 함께하고 있는 제조사 파트너 입니다.</div>
      <div className='grid max-w-[1180px] w-full gap-2 grid-cols-[repeat(auto-fit,_minmax(124px,1fr))] justify-center py-8'>
        {partnerList.map((v, idx) => (
          <div
            key={idx}
            className='flex flex-col justify-center gpa-2 border border-[#eee] p-2 gap-2 min-h-[100px] items-center bg-white rounded-[10px]'>
            <div className='flex items-center h-[48px]'>{v.img}</div>
            <div className='break-all text-[#444] text-[12px] text-center'>{v.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
