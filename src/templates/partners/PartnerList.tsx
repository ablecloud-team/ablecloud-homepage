import { partnerList } from '@/constants/partners';

export function PartnerList() {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
        제조사 파트너
      </div>
      <div>현재 에이블클라우드와 함께하고 있는 제조사 파트너 입니다.</div>
      <div className='grid max-w-[1300px] w-full gap-x-3 gap-y-4 grid-cols-[repeat(auto-fit,_minmax(240px,1fr))] justify-center py-8'>
        {partnerList.map((v, idx) => (
          <div
            key={idx}
            className='flex flex-col justify-center border border-[#eee] items-center bg-white rounded-[15px]'>
            <div className='flex items-center h-[95px]'>{v.img}</div>
            <div className='w-full break-all text-[#444] text-[18px] font-medium leading-[21px] py-[11px] text-center bg-[#DDE8FF] rounded-b-[15px]'>
              {v.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
