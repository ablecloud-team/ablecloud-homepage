import { HeaderData } from '@/types/header';

import aboutCard1Src from '@/public/images/company/about-card-1.png';
import aboutCard2Src from '@/public/images/company/about-card-2.png';
import aboutCard3Src from '@/public/images/company/about-card-3.png';
import certificates1Src from '@/public/images/company/certificates-1.png';
import certificates2Src from '@/public/images/company/certificates-2.png';
import certificates3Src from '@/public/images/company/certificates-3.png';
import certificates4Src from '@/public/images/company/certificates-4.png';
import certificates5Src from '@/public/images/company/certificates-5.png';

export const companyHeaderData: HeaderData = {
  title: {
    mainText: '회사소개',
  },
  description: '에이블클라우드의 소식을 만나보세요.',
  bgClassName: 'bg-company-header',
  heightClassName: 'min-h-[350px] lg:min-h-[374px]',
};

export const companyTabs = [
  { text: '회사소개', href: '/company/about' },
  { text: '연혁', href: '/company/history' },
  { text: '인증/특허', href: '/company/certifications' },
  { text: '위치', href: '/company/location' },
];

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

export const companyCertifications = [
  { imgSrc: certificates1Src, description: '소프트웨어품질인증서' },
  { imgSrc: certificates2Src, description: '저작권 등록증' },
  {
    imgSrc: certificates3Src,
    description: (
      <>
        HCI 부문 국내 기업 최초
        <br />
        가상화 관리
        <br />
        보안기능확인서
      </>
    ),
  },
  {
    imgSrc: certificates4Src,
    description: (
      <>
        HCI를 프로비저닝 하기 위한
        <br />
        시스템 및 방법
        <br />
        특허 획득
      </>
    ),
  },
  { imgSrc: certificates5Src, description: '기업부설연구소 인정서' },
];

export const companyAboutCardsData = [
  {
    title: '클라우드 전문가',
    description: '가상화 및 클라우드(HCI) 분야 10년 이상의 경력을 가진 엔지니어/개발자 중심기업',
    bgClassName: 'bg-company-about-card-1',
    imgSrc: aboutCard1Src,
  },
  {
    title: '끊임없는 R&D',
    description: '고객 요구사항에 가장 적합한 가상화 및 엔터프라이즈 HCI 연구개발을 수행하는 기업',
    bgClassName: 'bg-company-about-card-2',
    imgSrc: aboutCard2Src,
  },
  {
    title: '스마트한 클라우드 제품',
    description: '제품 개발을 통해 고객과 파트너들에게 체계적인 기술 지원을 하는 기업',
    bgClassName: 'bg-company-about-card-3',
    imgSrc: aboutCard3Src,
  },
];
