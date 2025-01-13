import Call from '@/public/icons/common/call.svg';
import Pin from '@/public/icons/common/pin.svg';

export default function CompanyLocation() {
  return (
    <div className='flex flex-col items-center justify-center animate-fade-in gap-8 md:gap-12 pt-12'>
      <div className='flex flex-col gap-4 max-w-[780px] w-full'>
        <iframe
          src='https://map.mommoss.com/?&lat=37.5268460691441&lng=126.9042119165590'
          loading='lazy'
          width='100%'
          height='280'
        />
        <div className='flex flex-col gap-4'>
          <div className='text-[24px] font-bold'>본사</div>
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center gap-[6px]'>
              <Pin /> 서울특별시 영등포구 영신로 220 Knk디지털타워 1901호
            </div>
            <div className='flex items-center gap-[6px]'>
              <Call /> 02-456-7667
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 max-w-[780px] w-full'>
        <iframe
          src='https://map.mommoss.com/?&lat=36.36950965624036&lng=127.40761276988948'
          loading='lazy'
          width='100%'
          height='280'
        />
        <div className='flex flex-col gap-4'>
          <div className='text-[24px] font-bold'>기술연구소</div>
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center gap-[6px]'>
              <Pin /> 대전광역시 대덕구 대화로106번길 66 펜타플렉스 810~812호
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
