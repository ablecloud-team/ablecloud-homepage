import { HeaderData } from '@/types/header';

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
  { text: '연혁', href: '/company/about' },
  { text: '인증/특허', href: '/company/about' },
  { text: '위치', href: '/company/about' },
];
