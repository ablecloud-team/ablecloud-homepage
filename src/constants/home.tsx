import Image from 'next/image';

import { HeaderData } from '@/types/header';
import { HomeApplicationCardData, HomeFooterCardData, HomeMainCardData } from '@/types/home';

import armySrc from '@/public/images/common/army.png';
import cnuhSrc from '@/public/images/common/cnuh.png';
import comwelSrc from '@/public/images/common/comwel.png';
import cooconSrc from '@/public/images/common/coocon.png';
import dapaSrc from '@/public/images/common/dapa.png';
import datqSrc from '@/public/images/common/datq.png';
import ekrSrc from '@/public/images/common/ekr.png';
import gbSrc from '@/public/images/common/gb.png';
import goryeongSrc from '@/public/images/common/goryeong.png';
import gyeongnamSrc from '@/public/images/common/gyeongnam.png';
import hcSrc from '@/public/images/common/hc.png';
import kacptaSrc from '@/public/images/common/kacpta.png';
import kepcoSrc from '@/public/images/common/kepco.png';
import kipoSrc from '@/public/images/common/kipo.png';
import pyeongtaekSrc from '@/public/images/common/pyeongtaek.png';
import sangjuSrc from '@/public/images/common/sangju.png';
import spoSrc from '@/public/images/common/spo.png';
import t3qSrc from '@/public/images/common/t3q.png';
import uscSrc from '@/public/images/common/usc.png';
import ycgSrc from '@/public/images/common/ycg.png';

export const homeSliderData: HeaderData[] = [
  {
    title: {
      mainText: 'ABLESTACK',
      subText: 'v4.0',
    },
    description: (
      <>
        에이블스택이
        <br />
        보안기능확인서를 획득하였습니다.
      </>
    ),
    bgClassName: 'bg-home-mobile-header-1 lg:bg-home-header-1',
    heightClassName: 'min-h-[450px] lg:min-h-[506px]',
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
    heightClassName: 'min-h-[450px] lg:min-h-[506px]',
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
    heightClassName: 'min-h-[450px] lg:min-h-[506px]',
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
    heightClassName: 'min-h-[450px] lg:min-h-[506px]',
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
    heightClassName: 'min-h-[450px] lg:min-h-[506px]',
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
    href: '/products/ablestack-hci',
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

export const homeApplicationCardsData: HomeApplicationCardData[] = [
  {
    title: '서버가상화',
    description: (
      <>
        기업에서 실행하는 모든 인프라와
        <br />
        어플리케이션을 가상화
      </>
    ),
    bgClassName: 'bg-home-application-1',
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
    bgClassName: 'bg-home-application-2',
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
    bgClassName: 'bg-home-application-3',
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
    bgClassName: 'bg-home-application-4',
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
    bgClassName: 'bg-home-application-5',
  },
];

export const homeInterviewIcons1 = [
  <Image src={kipoSrc} alt='' width={96} />,
  <Image src={spoSrc} alt='' width={80} />,
  <Image src={dapaSrc} alt='' width={96} />,
  <Image src={comwelSrc} alt='' width={86} />,
  <Image src={ekrSrc} alt='' width={137} />,
  <Image src={gyeongnamSrc} alt='' width={114} />,
  <Image src={hcSrc} alt='' width={85} />,
  <Image src={sangjuSrc} alt='' width={105} />,
  <Image src={kepcoSrc} alt='' width={120} />,
  <Image src={datqSrc} alt='' width={120} />,
];

export const homeInterviewIcons2 = [
  <Image src={ycgSrc} alt='' width={111} />,
  <Image src={goryeongSrc} alt='' width={102} />,
  <Image src={pyeongtaekSrc} alt='' width={56} />,
  <Image src={uscSrc} alt='' width={112} />,
  <Image src={gbSrc} alt='' width={110} />,
  <Image src={cooconSrc} alt='' width={120} />,
  <Image src={cnuhSrc} alt='' width={120} />,
  <Image src={armySrc} alt='' width={120} />,
  <Image src={t3qSrc} alt='' width={100} />,
  <Image src={kacptaSrc} alt='' width={115} />,
];

export const homeFooterCardsData: HomeFooterCardData[] = [
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
    buttonData: { text: '뉴스 확인하기', href: '/resource/blog' },
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
