import { HeaderData } from '@/types/header';

export const resourceType = ['blog', 'video', 'ebook'] as const;

export const resourceHeaderData: HeaderData = {
  title: {
    mainText: '리소스',
  },
  description: '에이블클라우드의 소식을 만나보세요.',
  bgClassName: 'bg-resource-header',
  heightClassName: 'min-h-[350px] lg:min-h-[374px]',
};

export const resourceTabs = [
  { text: '소식', href: '/resource/blog' },
  { text: '동영상', href: '/resource/video' },
  { text: '백서', href: '/resource/ebook' },
];
