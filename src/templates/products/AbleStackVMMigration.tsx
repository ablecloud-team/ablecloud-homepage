import Image from 'next/image';

import VMMigrationMainSrc from '@/public/images/products/vm-migration-main.png';
import VMMigrationSrc from '@/public/images/products/vm-migration.png';
import VMMonitorSrc from '@/public/images/products/vm-monitor.png';

export function AbleStackVMMigration() {
  return (
    <div className='flex flex-col gap-3 text-white text-center'>
      <div className='font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px] '>
        손쉬운 가상머신 마이그레이션 V2V
      </div>
      <div>
        가상머신을 마이그레이션할 수 있는 도구를 내장하고 있습니다. 따라서 웹 기반의 이관 도구를
        사용하면 원하는 가상머신을 손쉽게 옮길 수 있습니다.
      </div>
      <div className='flex gap-6 items-center justify-center flex-col-reverse lg:flex-row'>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-[34px] items-center'>
            <Image src={VMMonitorSrc} alt='' />
            <div className='text-base md:text-lg xl:text-[22px] bg-black px-2 py-1'>
              한눈에 보는 통합 모니터링 플랫폼
            </div>
          </div>
          <div className='flex flex-col gap-[34px] items-center'>
            <Image src={VMMigrationSrc} alt='' />
            <div className='text-base md:text-lg xl:text-[22px] bg-black px-2 py-1'>
              한눈에 보는 통합 모니터링 플랫폼
            </div>
          </div>
        </div>
        <div>
          <Image src={VMMigrationMainSrc} alt='' />
        </div>
      </div>
    </div>
  );
}
