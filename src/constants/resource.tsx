import { HeaderData } from '@/types/header';
import { EbookData } from '@/types/resource';

import ebook_1_Src from '@/public/images/resource/ebook/ebook_1.png';
import ebook_2_Src from '@/public/images/resource/ebook/ebook_2.png';
import ebook_3_Src from '@/public/images/resource/ebook/ebook_3.png';
import ebook_4_Src from '@/public/images/resource/ebook/ebook_4.png';
import ebook_5_Src from '@/public/images/resource/ebook/ebook_5.png';
import ebook_6_Src from '@/public/images/resource/ebook/ebook_6.png';
import ebook_7_Src from '@/public/images/resource/ebook/ebook_7.png';
import ebook_8_Src from '@/public/images/resource/ebook/ebook_8.png';
import ebook_9_Src from '@/public/images/resource/ebook/ebook_9.png';
import ebook_10_Src from '@/public/images/resource/ebook/ebook_10.png';

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
  'https://www.youtube.com/embed/hcGcB4NkmJk',
  'https://www.youtube.com/embed/ztn2Deth-yc',
  'https://www.youtube.com/embed/qyHcSTNEpAw',
  'https://www.youtube.com/embed/yjJnl-NMXiw',
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
  {
    type: 'ABLESTACK',
    title: 'ABLESTACK Kubernetes Cluster 사용기초',
    description: '내장된 Koral 기능을 이용한  쿠버네티스 클러스터 배포 방법',
    href: 'ABLESTACK_Kubernetes_Cluster.pdf',
    imgSrc: ebook_7_Src,
  },
  {
    type: 'ABLESTACK',
    title: 'ABLESTACK Kubernetes Cluster와 Portainer 플랫폼 연동',
    description: '애플리케이션 관리 플랫폼 Portainer와 연동하는 방법',
    href: 'ABLESTACK_Kubernetes_Cluster_Portainer.pdf',
    imgSrc: ebook_8_Src,
  },
  {
    type: 'ABLESTACK HCI',
    title: '비즈니스 연속성을 제공하는 ABLESTACK HCI 재해복구',
    description: '내장된 기능으로 Active-Active 재해복구 환경 구성 가능',
    href: 'ABLESTACK_HCI_ACTIVE.pdf',
    imgSrc: ebook_9_Src,
  },
  {
    type: 'ABLESTACK',
    title: 'ABLESTACK Link를 통한 마이크로 세그먼테이션 보안관리',
    description: '내장된 Link를 이용한 보안 관리 기능',
    href: 'ABLESTACK_LINK.pdf',
    imgSrc: ebook_10_Src,
  },
];
