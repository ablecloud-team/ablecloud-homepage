import { HeaderData } from '@/types/header';
import { HomeMainCardData, HomeSolutionCardData } from '@/types/home';

import Army from '@/public/icons/home/army.svg';
import Cnuh from '@/public/icons/home/cnuh.svg';
import Comwel from '@/public/icons/home/comwel.svg';
import Coocon from '@/public/icons/home/coocon.svg';
import Dapa from '@/public/icons/home/dapa.svg';
import Datq from '@/public/icons/home/datq.svg';
import Ekr from '@/public/icons/home/ekr.svg';
import Gb from '@/public/icons/home/gb.svg';
import Goryeong from '@/public/icons/home/goryeong.svg';
import Gyeongnam from '@/public/icons/home/gyeongnam.svg';
import Hc from '@/public/icons/home/hc.svg';
import Kacpta from '@/public/icons/home/kacpta.svg';
import Kepco from '@/public/icons/home/kepco.svg';
import Kipo from '@/public/icons/home/kipo.svg';
import Pyeongtaek from '@/public/icons/home/pyeongtaek.svg';
import Sangju from '@/public/icons/home/sangju.svg';
import Spo from '@/public/icons/home/spo.svg';
import T3q from '@/public/icons/home/t3q.svg';
import Usc from '@/public/icons/home/usc.svg';
import Ycg from '@/public/icons/home/ycg.svg';

export const homeSliderData: HeaderData[] = [
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
    buttonData: {
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
    buttonData: {
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
    buttonData: {
      text: '자세히보기',
      href: '/',
      color: 'white',
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
    buttonData: {
      text: '자세히보기',
      href: '/',
      color: 'white',
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
    buttonData: {
      text: '자세히보기',
      href: '/',
      color: 'white',
    },
  },
];

export const homeMainCardsData: HomeMainCardData[] = [
  {
    title: (
      <>
        국내 유일의
        <br /> 가상화 전문 기업
      </>
    ),
    href: '/',
    bgClassName: 'bg-home-main-card-1',
  },
  {
    title: (
      <>
        단일 가상화/
        <br /> 클라우드 플랫폼
      </>
    ),
    href: '/',
    bgClassName: 'bg-home-main-card-2',
  },
  {
    title: (
      <>
        기업 IT혁신을 위한
        <br /> 최고의 솔루션
      </>
    ),
    href: '/',
    bgClassName: 'bg-home-main-card-3',
  },
];

export const homeSolutionCardsData: HomeSolutionCardData[] = [
  {
    title: '서버가상화',
    description: (
      <>
        기업에서 실행하는 모든 인프라와
        <br />
        어플리케이션을 가상화
      </>
    ),
    bgClassName: 'bg-home-solution-1',
  },
  {
    title: '영상 감시',
    description: (
      <>
        고성능 환경 제공을 통해 효과적으로
        <br />
        영상 데이터 수집, 분석
      </>
    ),
    bgClassName: 'bg-home-solution-2',
  },
  {
    title: '빅데이터 분석',
    description: (
      <>
        ABLESTACK HCI만의 전용
        <br />
        아키텍처와 자동화 도구
      </>
    ),
    bgClassName: 'bg-home-solution-3',
  },
  {
    title: '연속성/데이터 백업',
    description: (
      <>
        전체 데이터 백업 및 다양한 복구
        <br />
        옵션을 통해 연속성 보장
      </>
    ),
    bgClassName: 'bg-home-solution-4',
  },
  {
    title: '보안 인프라',
    description: (
      <>
        제로 트러스트 정책을 적용하여
        <br />
        효과적으로 사이버 공격 방지
      </>
    ),
    bgClassName: 'bg-home-solution-5',
  },
];

export const homeSolutionIcons1 = [
  <Kipo />,
  <Spo />,
  <Dapa />,
  <Comwel />,
  <Ekr />,
  <Gyeongnam />,
  <Hc />,
  <Sangju />,
  <Kepco />,
  <Datq />,
];

export const homeSolutionIcons2 = [
  <Ycg />,
  <Goryeong />,
  <Pyeongtaek />,
  <Usc />,
  <Gb />,
  <Coocon />,
  <Cnuh />,
  <Army />,
  <T3q />,
  <Kacpta />,
];

export const homeFooterCardsData = [
  {
    category: 'Partner',
    bgColor: 'bg-[#117CE9]',
    text: (
      <>
        글로벌 성장을 위해 HCI 시장의 공동
        <br /> 성장을 만들어갈 파트너를 찾습니다.
      </>
    ),
    buttonData: { text: '파트너 신청하기', href: '/' },
  },
  {
    category: 'About us',
    bgColor: 'bg-[#07B4EB]',
    text: (
      <>
        새로운 기회, 혁신적인 솔루션을
        <br /> 알리기 위한 에이블클라우드의 목표
      </>
    ),
    buttonData: { text: '회사소개 자세히보기', href: '/' },
  },
  {
    category: 'News',
    bgColor: 'bg-[#007BA1]',
    text: (
      <>
        에이블클라우드의
        <br /> 대외적인 소식을 확인해보세요.
      </>
    ),
    buttonData: { text: '뉴스 확인하기', href: '/' },
  },
  {
    category: '뉴스레터',
    bgColor: 'bg-[#4B86FF]',
    text: (
      <>
        에이블클라우드의 최신 소식을
        <br /> 메일로 전송해드립니다.
      </>
    ),
    buttonData: { text: '뉴스레터 구독하기', href: '/' },
  },
];
