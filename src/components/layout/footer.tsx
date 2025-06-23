import Link from 'next/link';

import Ablecloud from '@/public/icons/common/ablecloud.svg';
import ArrowRight from '@/public/icons/common/arrow-right.svg';
import Blog from '@/public/icons/common/blog.svg';
import Youtube from '@/public/icons/common/youtube.svg';

export function Footer() {
  return (
    <div className='flex justify-center w-full bg-[#F9F9F9]'>
      <div className='flex flex-col gap-3 max-w-[1440px] w-full py-8 px-6 md:gap-4'>
        <div className='flex flex-col gap-3 md:flex-row md:gap-0'>
          <div className='flex flex-1 flex-col gap-4'>
            <div className='flex items-center md:h-[40px]'>
              <Link href={'/'}>
                <Ablecloud />
              </Link>
            </div>
            <div className='flex gap-1'>
              <Link href='https://blog.naver.com/ablecloud_official' target='_blank'>
                <Blog />
              </Link>
              <Link href='https://www.youtube.com/@ablecloud_official' target='_blank'>
                <Youtube />
              </Link>
              {/* <Link href='https://www.youtube.com/@ablecloud_official' target='_blank'>
                <Setting />
              </Link> */}
            </div>
          </div>
          <Link
            href={'https://docs.ablecloud.io/'}
            target='_blank'
            className='max-w-[342px] w-full h-fit'>
            <div className='flex gap-2 items-center text-sm py-[10px] bg-[#999999] text-[white] px-[14px] rounded-[5px]'>
              <div className='flex-1'>ABLESTACK DOCUMENT SITE</div>
              <ArrowRight width={18} />
            </div>
          </Link>
        </div>
        {/* <Link href={''} className='flex text-[#222222] w-fit items-center'>
          <div className='text-[12px] font-bold leading-[15.6px] underline underline-offset-2'>
            개인정보 처리방침
          </div>
          <ChevronRight width={16} height={16} className='text-[#222222]' />
        </Link> */}
        <div className='flex flex-col gap-0 text-[#999999] font-bold leading-[20.6px] text-[14px] lg:leading-[19.2px] lg:gap-2'>
          <div className='flex flex-col lg:flex-row'>
            <div>사업자등록번호 : 886-86-02158</div>
            <span className='mx-3 hidden lg:block'>|</span>
            <div>회사명 : 에이블클라우드</div>
          </div>
          <div className='flex flex-col lg:flex-row'>
            <div>본사 : 서울특별시 영등포구 영신로 220 Knk디지털타워 1901호</div>
            <span className='mx-3 hidden lg:block'>|</span>
            <div>전화 : 1544-3696</div>
            <span className='mx-3 hidden lg:block'>|</span>
            <div>기술연구소 : 대전광역시 대덕구 대화로106번길 66 펜타플렉스 810~812호</div>
          </div>
        </div>

        <div className='text-[#999999] font-medium text-[14px]'>
          ⓒ ABLECLOUD Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
