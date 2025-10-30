import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import HCICard1Src from '@/public/images/products/hci-card-1.png';
import HCICard2Src from '@/public/images/products/hci-card-2.png';
import HCICard3EnSrc from '@/public/images/products/hci-card-3-en.png';
import HCICard3Src from '@/public/images/products/hci-card-3.png';
import HCICard4EnSrc from '@/public/images/products/hci-card-4-en.png';
import HCICard4Src from '@/public/images/products/hci-card-4.png';

const cardsData = [
  {
    title: '클라우드 관리 플랫폼',
    description: (
      <>
        웹 기반 단일 콘솔로 전체 인프라 시스템 통합 관리
        <br />
        멀티 하이퍼바이저 지원, 가상머신, 네트워크, 스토리지, 자동화, 백업, 재해복구 등 기능 제공
      </>
    ),
    imgSrc: HCICard1Src,
  },
  {
    title: '통합 모니터링 플랫폼',
    description: (
      <>
        실시간 성능 모니터링을 통한 서비스 부하 감지 및 필요 사항 한 눈에 파악
        <br />
        서버, 네트워크, 스토리지 등 모니터링을 통한 서비스 장애 사전 방지, 이상 징후 경고 알림 기능
        제공
      </>
    ),
    imgSrc: HCICard2Src,
  },
  {
    title: '마법사를 통한 손쉬운 설치',
    description: (
      <>
        ABLESTACK 구성 마법사를 이용해 모든 HCI 구성요소를 설치하고 바로 사용 가능 <br />
        단일 플랫폼을 이용해 X86 서버를 클러스터링하여 클라우드 환경에 필요한 모든 요소 제공
      </>
    ),
    imgSrc: HCICard3Src,
  },
  {
    title: '외부 스토리지 연동',
    description: (
      <>
        ABLESTACK HCI와 외부 스토리지 (SAN/iSCSI) 연동을 통한 기존 자원 재활용 가능 <br />
        다양한 스토리지 게이트웨이를 제공, 활용 가능(블록스토리지, 파일시스템, 오브젝트 스토리지 등)
      </>
    ),
    imgSrc: HCICard4Src,
  },
];

export function AblestackHCIContentCards() {
  const t = useTranslations('product.hci.contentCards');
  const locale = useLocale();

  const cardsData = [
    {
      title: t('0.title'),
      description: t.rich('0.description', {
        br: () => <br />,
      }),
      imgSrc: HCICard1Src,
    },
    {
      title: t('1.title'),
      description: t.rich('1.description', {
        br: () => <br />,
      }),
      imgSrc: HCICard2Src,
    },
    {
      title: t('2.title'),
      description: t.rich('2.description', {
        br: () => <br />,
      }),
      imgSrc: locale === 'en' ? HCICard3EnSrc : HCICard3Src,
    },
    {
      title: t('3.title'),
      description: t.rich('3.description', {
        br: () => <br />,
      }),
      imgSrc: locale === 'en' ? HCICard4EnSrc : HCICard4Src,
    },
  ];

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
        {cardsData.map((v, idx) => {
          return (
            <div
              key={idx}
              className='flex flex-col bg-white max-w-[654px] w-full rounded-[10px] p-6 lg:p-8'>
              <div className='flex flex-col gap-2'>
                <div className='text-[#926CFF] font-bold text-[20px] md:text-2xl'>{v.title}</div>
                <div className='tracking-tight'>{v.description}</div>
              </div>
              <div className='flex flex-1 items-end mt-6'>
                <div className='w-full flex items-center justify-center bg-[#F5F5F5]  p-4'>
                  <Image src={v.imgSrc} alt='' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
