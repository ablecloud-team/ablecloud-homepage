import { HeaderData } from '@/types/header';
import { EbookData } from '@/types/resource';

import ebook_1_Src from '@/public/images/resource/ebook/ebook_1.png';
import ebook_2_Src from '@/public/images/resource/ebook/ebook_2.png';
import ebook_3_Src from '@/public/images/resource/ebook/ebook_3.png';
import ebook_4_Src from '@/public/images/resource/ebook/ebook_4.png';
import ebook_5_Src from '@/public/images/resource/ebook/ebook_5.png';
import ebook_6_Src from '@/public/images/resource/ebook/ebook_6.png';

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

export const ebooksData: EbookData[] = [
  {
    type: 'ABLESTACK Technical White Paper',
    title: 'Blade Server? 이제는 HCI',
    description: '블레이드 서버 또는 HCI 중 어떤 것을 도입해야 할까요?',
    href: 'ABLESTACK_Technical.pdf',
    imgSrc: ebook_1_Src,
  },
  {
    type: 'ABLESTACK V2V',
    title: 'V사를 완벽하게 대체할 수 있는 플랫폼',
    description: '영구 라이센스를 제공하는 ABLESTACK HCI 플랫폼',
    href: 'ABLESTACK_VMWare.pdf',
    imgSrc: ebook_2_Src,
  },
  {
    type: 'ABLESTACK with Oracle',
    title: 'ABLESTACK for Oracle RAC 구성',
    description: 'ABLESTACK 가상화 환경에서 Oracle RAC을 구성하세요.',
    href: 'ABLESTACK_for_Oracle_RAC.pdf',
    imgSrc: ebook_3_Src,
  },
  {
    type: 'ABLESTACK V2V',
    title: 'ABLESTACK VMWare 가상머신 마이그레이션',
    description: '내장된 마이그레이션 도구를 통한 V2V 가상머신 이관',
    href: 'ABLESTACK_VMWare_Migration.pdf',
    imgSrc: ebook_4_Src,
  },
  {
    type: 'ABLESTACK P2V',
    title: 'ABLESTACK 물리서버를 가상머신으로',
    description: '물리서버를 가상머신으로 마이그레이션하는 방법',
    href: 'ABLESTACK_P2V_Migration.pdf',
    imgSrc: ebook_5_Src,
  },
  {
    type: 'ABLESTACK VS VMware',
    title: 'ABLESTACK-VMware vSphere 제품 비교',
    description: 'ABLESTACK와 VMWare 주요 라이선스 기능 비교표',
    href: 'ABLESTACK-VMWare_vSphere.pdf',
    imgSrc: ebook_6_Src,
  },
];
