import { HeaderData } from '@/types/header';
import { CompatibilityData, CompatibilityType, EbookData } from '@/types/resource';

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
import ebook_11_Src from '@/public/images/resource/ebook/ebook_11.png';
import ebook_12_Src from '@/public/images/resource/ebook/ebook_12.png';

export const resourceType = ['blog', 'video', 'ebook'] as const;

export const resourceTabs = [
  { text: '소식', href: '/resource/blog' },
  { text: '동영상', href: '/resource/video' },
  { text: '백서', href: '/resource/ebook' },
  { text: '호환성', href: '/resource/compatibility' },
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
  'https://www.youtube.com/embed/YskCBg_ZpPE',
  'https://www.youtube.com/embed/H1Tv5-7Pv2E',
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
    type: 'ABLESTACK Koral',
    title: 'ABLESTACK Kubernetes Cluster 사용기초',
    description: '내장된 Koral 기능을 이용한  쿠버네티스 클러스터 배포 방법',
    href: 'ABLESTACK_Kubernetes_Cluster.pdf',
    imgSrc: ebook_7_Src,
  },
  {
    type: 'ABLESTACK Koral',
    title: 'ABLESTACK Kubernetes Cluster와 Portainer 플랫폼 연동',
    description: '애플리케이션 관리 플랫폼 Portainer와 연동하는 방법',
    href: 'ABLESTACK_Kubernetes_Cluster_Portainer.pdf',
    imgSrc: ebook_8_Src,
  },
  {
    type: 'ABLESTACK Over',
    title: '비즈니스 연속성을 제공하는 ABLESTACK HCI 재해복구',
    description: '내장된 기능으로 Active-Active 재해복구 환경 구성 가능',
    href: 'ABLESTACK_HCI_ACTIVE.pdf',
    imgSrc: ebook_9_Src,
  },
  {
    type: 'ABLESTACK Link',
    title: 'ABLESTACK Link를 통한 마이크로 세그먼테이션 보안관리',
    description: '내장된 Link를 이용한 보안 관리 기능',
    href: 'ABLESTACK_LINK.pdf',
    imgSrc: ebook_10_Src,
  },
  {
    type: 'ABLESTACK Link',
    title: 'ABLESTACK Link Load Balancer 어플라이언스 활용',
    description: '내장된 Link를 이용한 Load Balancer 적용 시나리오',
    href: 'ABLESTACK_LINK_LOAD_BALANCER.pdf',
    imgSrc: ebook_11_Src,
  },
  {
    type: 'ABLESTACK  VS VMware',
    title: 'ABLESTACK vs VMware 성능 비교',
    description: 'ABLESTACK와 VMware 동일 환경에서의 성능 비교',
    href: 'ABLESTACK_VS_VMware.pdf',
    imgSrc: ebook_12_Src,
  },
];

export const compatibilityList = [
  {
    title: '하이퍼바이저 버전',
    description:
      'Mold는 자체적으로 제공되는 Cell 하이버파이저 외에 다양한 하이퍼바이저를 지원합니다.',
    path: 'hypervisor',
  },
  {
    title: '서버',
    description: 'ABLESTACK은 다양한 상용 x86서버에 설치가 가능합니다.',
    path: 'server',
  },
  {
    title: 'Guest OS',
    description: 'ABLESTACK은 다양한 Guest OS를 지원합니다.',
    path: 'guest-os',
  },
  {
    title: '가상화 애플리케이션/플랫폼',
    description: 'ABLESTACK은 다음의 가상화 응용 애플리케이션 또는 플랫폼과 호환됩니다.',
    path: 'virtualization',
  },
  {
    title: '외장 스토리지',
    description:
      'ABLESTACK Mold는 Glue SDS 외에 다양한 외장 스토리지를 연결할 수 있도록 지원하여 효과적으로 클라우드 환경을 운영할 수 있도록 합니다.',
    path: 'external-storage',
  },
  {
    title: 'Backup 솔루션',
    description: 'ABLESTACK은 다양한 Backup 솔루션을 지원하며 다음과 같습니다.',
    path: 'backup',
  },
];

export const compatibilityType = [
  'hypervisor',
  'server',
  'guest-os',
  'virtualization',
  'external-storage',
  'backup',
] as const;

export const compatibilityData: { [K in CompatibilityType]: CompatibilityData } = {
  hypervisor: {
    title: '호환되는 하이퍼바이저 버전',
    descriptionList: [
      {
        description:
          'Mold는 자체적으로 제공되는 Cell 하이버파이저 외에 다양한 하이퍼바이저를 지원합니다. Mold에 의해 통합 관리될 수 있는 하이퍼바이저는 다음과 같습니다.',
        list: [
          'KVM : Ubuntu 18.04 LTS, 20.04 LTS, CentOS 7, 8, RHEL 7, 8, 9, Rocky Linux 8, 9, openSUSE Leap 15, SUSE Linux Enterprise Server 15',
          'Citrix Hypervisor : 최신 핫픽스가 적용된 7.x, 8.x 버전',
          'XCP-ng : 7.x, 8.x',
          'VMWare : 6.x, 7.x, 8.x',
        ],
      },
      {
        description:
          'Mold에 의해 통합 관리 되지는 않으나, Glue를 통한 SDS를 구성하여 비관리형 HCI를 제공할 수 있는 하이퍼바이저는 다음과 같습니다.',
        list: [
          '위의 Mold가 통합관리하는 모든 하이퍼바이저',
          'Hyper-V : Windows 2016 이상, Hyper-V 2016 이상',
        ],
      },
    ],
  },
  server: {
    title: '호환되는 서버',
    descriptionList: [
      {
        description: 'ABLESTACK은 다양한 상용 x86서버에 설치가 가능하며 다음과 같습니다.',
        list: [
          'DELL',
          'HPE',
          'Fujitsu',
          'Lenovo',
          '슈퍼마이크로',
          '유니와이드',
          'KTNF',
          '이슬림',
          'SNA',
          '쓰리에스코어(AMD)',
        ],
      },
    ],
  },
  'guest-os': {
    title: '호환되는 Guest OS',
    descriptionList: [
      {
        description: 'ABLESTACK은 다양한 Guest OS를 지원하며 다음과 같습니다.',
        list: [
          'Redhat Enterprise Linux : 6 이상',
          'Oracle Linux : 6 이상',
          'SUSE Enterprise Linux : 11 이상',
          'Ubuntu : 16 이상',
          'Rocky Linux : 8 이상',
          'Cent OS : 7 이상',
          'Windows : 8 이상',
          'Windows Server : 2012 이상',
        ],
      },
    ],
  },
  virtualization: {
    title: '호환성이 검증된 가상화 애플리케이션/플랫폼',
    descriptionList: [
      {
        description: 'ABLESTACK은 다음의 가상화 응용 애플리케이션 또는 플랫폼과 호환됩니다.',
        list: [
          'Tilon(틸론) : DStatsion(VDI)',
          'Citrix : Virtual Apps & Desktops(VDI)',
          '이노티움 :  InnoECM(문서중앙화)',
          'Tmax : Webtob(WEB), Jeus(WAS), Tibero(DB)',
          'Oracle : Oracle RAC(DB)',
          'MS : MSSQL(DB)',
        ],
      },
    ],
  },
  'external-storage': {
    title: '호환되는 외장 스토리지',
    descriptionList: [
      {
        description:
          'ABLESTACK Mold는 Glue SDS 외에 다양한 외장 스토리지를 연결할 수 있도록 지원하여 효과적으로 클라우드 환경을 운영할 수 있도록 지원합니다. 블록 스토리지로 사용할 수 있도록 지원되는 외장스토리지는 다음과 같습니다.',
        list: [
          'VMWare',
          '표준 iSCSI',
          '표준 NFS',
          'Citrix Hypervisor',
          '표준 iSCSI',
          '표준 NFS',
          'SMB',
          'Microsoft HyperV',
          '표준 iSCSI',
          'SMB',
          'Cell, KVM',
          '표준 iSCSI',
          '표준 NFS/POSIX호환 스토리지',
          'GluesterFS',
          'SolidFire',
          'Ceph RBD',
          'Datera',
          'Cloudbyte',
          'Nexenta',
          'Dell PowerFlex',
          'LINSTOR',
          'ABLESTACK Glue Block',
          'ABLESTACK Glue Filesystem',
        ],
      },
    ],
  },
  backup: {
    title: '호환되는 Backup 솔루션',
    descriptionList: [
      {
        description: 'ABLESTACK은 다양한 Backup 솔루션을 지원하며 다음과 같습니다.',
        list: [
          'Veeam, Dell Networker 백업 플랫폼 통합',
          'Veritas, Commvault 백업과 연동 지원',
          'Synology Active Backup for Business 백업 지원',
        ],
      },
    ],
  },
};
