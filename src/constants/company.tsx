import { getTranslations } from 'next-intl/server';

import { HeaderData } from '@/types/header';

import aboutCard1Src from '@/public/images/company/about-card-1.png';
import aboutCard2Src from '@/public/images/company/about-card-2.png';
import aboutCard3Src from '@/public/images/company/about-card-3.png';
import certificates1Src from '@/public/images/company/certificates-1.png';
import certificates2Src from '@/public/images/company/certificates-2.png';
import certificates3Src from '@/public/images/company/certificates-3.png';
import certificates4Src from '@/public/images/company/certificates-4.png';
import certificates5Src from '@/public/images/company/certificates-5.png';

export const getCompanyHeaderData = async (): Promise<HeaderData> => {
  const t = await getTranslations('company.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: t('description'),
    bgClassName: 'bg-company-header',
    heightClassName: 'min-h-[350px] lg:min-h-[374px]',
  };
};

export const getCompanyTabs = async () => {
  const t = await getTranslations('company');

  return [
    { text: t('tab.0.text'), href: '/company/about' },
    { text: t('tab.1.text'), href: '/company/history' },
    { text: t('tab.2.text'), href: '/company/certifications' },
    { text: t('tab.3.text'), href: '/company/location' },
  ];
};

export const getCompanyHistory = async () => {
  const t = await getTranslations('company.history');

  return [
    {
      year: t('2025.year'),
      history: [
        { text: t('2025.history.0') },
        { text: t('2025.history.1') },
        { text: t('2025.history.2') },
        { text: t('2025.history.3') },
        { text: t('2025.history.4') },
        { text: t('2025.history.5') },
        { text: t('2025.history.6') },
        { text: t('2025.history.7') },
        { text: t('2025.history.8') },
        { text: t('2025.history.9') },
        { text: t('2025.history.10') },
        { text: t('2025.history.11') },
        { text: t('2025.history.12') },
        { text: t('2025.history.13') },
      ],
    },
    {
      year: t('2024.year'),
      history: [
        { text: t('2024.history.0') },
        { text: t('2024.history.1') },
        { text: t('2024.history.2'), isHighlight: true },
        { text: t('2024.history.3') },
        { text: t('2024.history.4') },
        { text: t('2024.history.5') },
        { text: t('2024.history.6') },
        { text: t('2024.history.7') },
        { text: t('2024.history.8') },
        { text: t('2024.history.9') },
        { text: t('2024.history.10') },
        { text: t('2024.history.11') },
        { text: t('2024.history.12') },
        { text: t('2024.history.13') },
        { text: t('2024.history.14') },
        { text: t('2024.history.15') },
      ],
    },
    {
      year: t('2023.year'),
      history: [
        { text: t('2023.history.0') },
        { text: t('2023.history.1') },
        { text: t('2023.history.2'), isHighlight: true },
        { text: t('2023.history.3') },
        { text: t('2023.history.4') },
        { text: t('2023.history.5') },
        { text: t('2023.history.6') },
        { text: t('2023.history.7') },
        { text: t('2023.history.8') },
        { text: t('2023.history.9') },
        { text: t('2023.history.10') },
        { text: t('2023.history.11') },
        { text: t('2023.history.12') },
      ],
    },
    {
      year: t('2022.year'),
      history: [
        { text: t('2022.history.0') },
        { text: t('2022.history.1') },
        { text: t('2022.history.2') },
        { text: t('2022.history.3') },
        { text: t('2022.history.4') },
        { text: t('2022.history.5') },
        { text: t('2022.history.6') },
        { text: t('2022.history.7') },
      ],
    },
    {
      year: t('2021.year'),
      history: [
        { text: t('2021.history.0') },
        { text: t('2021.history.1') },
        { text: t('2021.history.2') },
        { text: t('2021.history.3') },
        { text: t('2021.history.4') },
      ],
    },
  ];
};
export const companyHistory = [
  {
    year: '2024',
    history: [
      { text: '‘정원엔시스’ 업무 협약' },
      { text: '에이블클라우드 서울사무소 개소' },
      { text: '‘HCI를 프로비저닝 하기 위한 시스템 및 방법’ 특허 획득', isHighlight: true },
      { text: '광주광역시-AI 유치기업 업무협약' },
      { text: '‘쿠콘’ 서버 가상화 HCI 구축(뉴타닉스 윈백)' },
      { text: '‘국방기술품질원’ 클라우드 기반 통합서버 구축' },
      { text: '‘예천군청’ VMS 및 통합 플랫폼 HCI 구축' },
      { text: '국정원 ‘보안기능확인서’ 획득', isHighlight: true },
      { text: '‘한국전력공사’ Citrix 가상데스크톱(VDI) 구축 사업' },
      { text: 'CIC(Cloud Infinity Conference)2024 개최' },
      { text: '에이블스택 4.0 출시' },
      { text: '‘한드림넷’ 업무 협약' },
      { text: '‘AJICT’ 업무 협약' },
      { text: '‘이노그리드’ 업무 협약' },
      { text: 'GS 1등급 소프트웨어 품질 인증' },
      { text: '‘ABLESTACK’ 상표권 등록' },
    ],
  },
  {
    year: '2023',
    history: [
      { text: '‘슈퍼솔루션’ 업무 협약' },
      { text: '‘제노솔루션’ 업무 협약' },
      { text: '‘엑세스랩’ 업무 협약' },
      { text: 'CIC(Cloud Infinity Conference)2023 개최' },
      { text: '‘Citrix Ready’ 호환성 인증 획득', isHighlight: true },
      { text: '‘틸론’ 업무 협약' },
      { text: '‘파로스정보통신’ 파트너십 계약 체결' },
      { text: '‘이노그리드’ 파트너십 계약 체결' },
      { text: '‘에스엔에이’ 파트너십 계약 체결' },
      { text: '‘대검찰청’ 정보통신망 고도화 사업 구축' },
      { text: '‘이노티움, 티쓰리큐’ 업무 협약' },
      { text: '‘육군본부’  지능형 스마트부대(3단계) 시범구축 사업' },
      { text: '‘방위사업청’ 국방 원가관리시스템(DIDC) 고도화 2차 사업' },
    ],
  },
  {
    year: '2022',
    history: [
      { text: '에이블스택 조달청 등록' },
      { text: 'Cloud Innovation 2023’ 개최' },
      { text: '‘지오멕스소프트’ 업무 협약' },
      { text: '‘지엔텔’ 파트너십 계약 체결' },
      { text: '‘한국세무사회’ 클라우드 데이터 센터 구축 협약' },
      { text: '‘데이터스트림즈’ HCI 기반 DevOps 연구개발환경 구축' },
      { text: '‘합천군청’ HCI 기반 통합 플랫폼 구축' },
      { text: '‘국방기술품질원’ HCI 기반 문서보안 및 중앙화 시스템 구축' },
    ],
  },
  {
    year: '2021',
    history: [
      { text: '에이블스택 저작권 등록' },
      { text: 'GS 1등급 소프트웨어 품질 인증' },
      { text: '클라우드 소프트웨어 에이블스택 1.0 런칭' },
      { text: '기업부설연구소 인정서 취득' },
      { text: '에이블클라우드 연구소 설립' },
    ],
  },
];

export const getCompanyCertifications = async () => {
  const t = await getTranslations('company');

  return [
    {
      imgSrc: certificates1Src,
      description: t.rich('certification.0', { br: () => <br /> }),
    },
    {
      imgSrc: certificates2Src,
      description: t.rich('certification.1', { br: () => <br /> }),
    },
    {
      imgSrc: certificates3Src,
      description: <>{t.rich('certification.2', { br: () => <br /> })}</>,
    },
    {
      imgSrc: certificates4Src,
      description: <>{t.rich('certification.3', { br: () => <br /> })}</>,
    },
    { imgSrc: certificates5Src, description: t.rich('certification.4', { br: () => <br /> }) },
  ];
};

export const getCompanyAboutCardsData = async () => {
  const t = await getTranslations('company.about');

  return [
    {
      title: t('card.0.title'),
      description: t('card.0.description'),
      bgClassName: 'bg-company-about-card-1',
      imgSrc: aboutCard1Src,
    },
    {
      title: t('card.1.title'),
      description: t.rich('card.1.description', { br: () => <br /> }),
      bgClassName: 'bg-company-about-card-2',
      imgSrc: aboutCard2Src,
    },
    {
      title: t('card.2.title'),
      description: t('card.2.description'),
      bgClassName: 'bg-company-about-card-3',
      imgSrc: aboutCard3Src,
    },
  ];
};
