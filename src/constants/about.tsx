import { AboutCardData } from '@/types/about';
import { HeaderData } from '@/types/header';

import aboutEffectSrc1 from '@/public/images/about/about-effect-1.png';
import aboutEffectSrc2 from '@/public/images/about/about-effect-2.png';
import aboutEffectSrc3 from '@/public/images/about/about-effect-3.png';
import aboutEffectSrc4 from '@/public/images/about/about-effect-4.png';
import aboutPerformanceSrc1 from '@/public/images/about/about-performance-1.png';
import aboutPerformanceSrc2 from '@/public/images/about/about-performance-2.png';
import aboutPerformanceSrc3 from '@/public/images/about/about-performance-3.png';
import aboutPerformanceSrc4 from '@/public/images/about/about-performance-4.png';
import aboutPerformanceSrc5 from '@/public/images/about/about-performance-5.png';
import aboutPerformanceUseCaseSrc1 from '@/public/images/about/about-performance-usecase-1.png';
import aboutPerformanceUseCaseSrc2 from '@/public/images/about/about-performance-usecase-2.png';

export const aboutPerformanceHeaderData: HeaderData = {
  title: {
    mainText: '가상데스크톱 불편함 한번에 해결',
  },
  description:
    '가상데스크톱을 위한 고성능 환경을 단일 플랫폼으로 제공해 복잡성 문제와 성능 문제를 동시에 해결할 수 있습니다.',
  bgClassName: 'bg-about-header-performance',
  heightClassName: 'min-h-[350px] lg:min-h-[374px]',
};

export const aboutEffectHeaderData: HeaderData = {
  title: {
    mainText: '획기적인 영상 감시 인프라',
  },
  description: '기존 장비를 그대로 활용하여 획기적으로 비용을 줄여주는 단일 플랫폼',
  bgClassName: 'bg-about-header-effect',
  heightClassName: 'min-h-[350px] lg:min-h-[374px]',
};

export const aboutPerformanceCardsData: AboutCardData[] = [
  {
    imgSrc: aboutPerformanceSrc1,
    title: (
      <>
        고성능
        <br />
        분산스토리지 제공
      </>
    ),
  },
  {
    imgSrc: aboutPerformanceSrc2,
    title: (
      <>
        iSCSI, SMB 등<br />
        다양한 프로토콜 지원
      </>
    ),
  },
  {
    imgSrc: aboutPerformanceSrc3,
    title: (
      <>
        데이터 로컬리티를 <br />
        통한 고성능 지원
      </>
    ),
  },
  {
    imgSrc: aboutPerformanceSrc4,
    title: (
      <>
        가상머신에 대한 <br />
        통합 모니터링
      </>
    ),
  },
  {
    imgSrc: aboutPerformanceSrc5,
    title: (
      <>
        멀티하이퍼바이저 <br />
        지원
      </>
    ),
  },
];

export const aboutEffectCardsData: AboutCardData[] = [
  {
    imgSrc: aboutEffectSrc1,
    title: '서버 가상화',
  },
  {
    imgSrc: aboutEffectSrc2,
    title: (
      <>
        내장 디스크 기반의 <br />
        고성능 스토리지
      </>
    ),
  },
  {
    imgSrc: aboutEffectSrc3,
    title: (
      <>
        웹 기반 통합 인프라 <br />
        관리 플랫폼
      </>
    ),
  },
  {
    imgSrc: aboutEffectSrc4,
    title: '인프라 통합 모니터링',
  },
];

export const aboutPerformanceUseCaseCardsData: AboutCardData[] = [
  {
    imgSrc: aboutPerformanceUseCaseSrc1,
    title: (
      <>
        고성능 교육용 <br />
        가상데스크톱 환경 제공
      </>
    ),
  },
  {
    imgSrc: aboutPerformanceUseCaseSrc2,
    title: (
      <>
        통합 모니터링 및 <br />
        운영 환경 제공
      </>
    ),
  },
];

export const aboutEffectUseCaseCardsData: AboutCardData[] = [
  {
    imgSrc: aboutPerformanceUseCaseSrc1,
    title: (
      <>
        상주시 데이터센터 <br />
        상면 절약
      </>
    ),
  },
  {
    imgSrc: aboutPerformanceUseCaseSrc2,
    title: (
      <>
        기존 인프라 재활용 및 <br />
        단계적 인프라 교체
        <br />
        환경 제공
      </>
    ),
  },
  {
    imgSrc: aboutPerformanceUseCaseSrc2,
    title: (
      <>
        고가용성 제공을 통한 <br />
        안정적 인프라 제공
      </>
    ),
  },
];
