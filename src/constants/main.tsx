import { HeaderData } from '@/types/header';

export const MainSliderData: HeaderData[] = [
  {
    title: {
      mainText: <span className='break-all'>ABLESTACK</span>,
      subText: '4.0v',
    },
    description: (
      <>
        에이블스택이
        <br />
        보안기능확인서를 획득하였습니다.
      </>
    ),
    bgClassName: 'bg-home-mobile-header-1 lg:bg-home-header-1',
    heightClassName: 'min-h-[450px] lg:min-h-[720px]',
    button: {
      text: '자세히보기',
      href: '/',
    },
  },
  {
    title: {
      mainText: 'V사의 완벽한 대안',
    },
    description: (
      <>
        부담스러운 구독형 가상머신을
        <br />
        완벽하게 대체할 수 있도록
      </>
    ),
    bgClassName: 'bg-home-mobile-header-2 lg:bg-home-header-2',
    heightClassName: 'min-h-[450px] lg:min-h-[720px]',
    button: {
      text: '자세히보기',
      href: '/',
    },
  },
  {
    title: {
      mainText: '복잡한 인프라를 단일 플랫폼으로',
    },
    description: (
      <>
        서버, 스토리지, 네트워크 인프라를
        <br />
        단일 플랫폼으로 제공하여 비용 최대 80% 절감
      </>
    ),
    bgClassName: 'bg-home-mobile-header-3 lg:bg-home-header-3',
    heightClassName: 'min-h-[450px] lg:min-h-[720px]',
    button: {
      text: '자세히보기',
      href: '/',
      className: '!text-[#202020] !bg-white',
    },
  },
  {
    title: {
      mainText: '가상데스크톱 불편함 한번에 해결',
    },
    description: (
      <>
        가상데스크톱 위한 고성능 환경을 단일 플랫폼으로
        <br />
        제공해 복잡성 문제와 성능 문제 동시 해결
      </>
    ),
    bgClassName: 'bg-home-mobile-header-4 lg:bg-home-header-4',
    heightClassName: 'min-h-[450px] lg:min-h-[720px]',
    button: {
      text: '자세히보기',
      href: '/',
      className: '!text-[#202020] !bg-white',
    },
  },
  {
    title: {
      mainText: '획기적인 영상 감시 인프라',
    },
    description: (
      <>
        기존 장비를 그대로 활용하여 획기적으로
        <br />
        비용을 줄여주는 단일 플랫폼
      </>
    ),
    bgClassName: 'bg-home-mobile-header-5 lg:bg-home-header-5',
    heightClassName: 'min-h-[450px] lg:min-h-[720px]',
    button: {
      text: '자세히보기',
      href: '/',
      className: '!text-[#202020] !bg-white',
    },
  },
];
