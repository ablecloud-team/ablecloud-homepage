import { HeaderData } from '@/types/header';

export const resourceType = ['blog', 'video', 'ebook'] as const;

export const resourceTabs = [
  { text: '소식', href: '/resource/blog' },
  { text: '동영상', href: '/resource/video' },
  { text: '백서', href: '/resource/ebook' },
];

export const resourceHeaderData: HeaderData = {
  title: {
    mainText: '리소스',
  },
  description: '에이블클라우드의 소식을 만나보세요.',
  bgClassName: 'bg-resource-header',
  heightClassName: 'min-h-[350px] lg:min-h-[374px]',
};

export const videosData: string[] = [
  'https://www.youtube.com/embed/6xLcY16LpgM',
  'https://www.youtube.com/embed/GHl3-2tg2b0',
  'https://www.youtube.com/embed/ury7M9NpBFE',
  'https://www.youtube.com/embed/hL9dMBIlQRE',
  'https://www.youtube.com/embed/aEZ3q1BTkmw',
  'https://www.youtube.com/embed/aYKeLLrlZ6o',
];
