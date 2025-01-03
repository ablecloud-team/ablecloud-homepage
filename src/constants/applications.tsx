import { ApplicationListData, ApplicationType } from '@/types/applications';
import { HeaderData } from '@/types/header';

import aiMlSrc from '@/public/images/applications/ai-ml.png';
import backupRecoverySrc from '@/public/images/applications/backup-recovery.png';
import bigDataAnalysisSrc from '@/public/images/applications/big-data-analysis.png';
import businessContinuitySrc from '@/public/images/applications/business-continuity.png';
import businessCriticalSrc from '@/public/images/applications/business-critical.png';
import callCenterSrc from '@/public/images/applications/call-center.png';
import ciCdSrc from '@/public/images/applications/ci-cd.png';
import cloudNativeSrc from '@/public/images/applications/cloud-native.png';
import databaseSrc from '@/public/images/applications/database.png';
import devTestSrc from '@/public/images/applications/dev-test.png';
import devopsOperationsSrc from '@/public/images/applications/devops-operations.png';
import edgeComputingSrc from '@/public/images/applications/edge-computing.png';
import electronicDocumentSrc from '@/public/images/applications/electronic-document.png';
import hybridCloudSrc from '@/public/images/applications/hybrid-cloud.png';
import multiCloudSrc from '@/public/images/applications/multi-cloud.png';
import privateCloudSrc from '@/public/images/applications/private-cloud.png';
import remoteOfficesSrc from '@/public/images/applications/remote-offices.png';
import securityInfraSrc from '@/public/images/applications/security-infra.png';
import serverVirtualizationSrc from '@/public/images/applications/server-virtualization.png';
import videoSurveillanceSrc from '@/public/images/applications/video-surveillance.png';
import virtualDesktopDaasSrc from '@/public/images/applications/virtual-desktop-daas.png';

export const applicationNames = [
  'big-data-analysis',
  'business-continuity',
  'business-critical',
  'hybrid-cloud',
  'private-cloud',
  'cloud-native',
  'database',
  'dev-test',
  'devops-operations',
  'virtual-desktop-daas',
  'ai-ml',
  'security-infra',
  'multi-cloud',
  'edge-computing',
  'video-surveillance',
  'electronic-document',
  'backup-recovery',
  'ci-cd',
  'remote-offices',
  'call-center',
  'server-virtualization',
] as const;

export const applicationHeaderData: HeaderData = {
  title: {
    mainText: '적용분야',
  },
  description: (
    <>
      어떤 형태의 애플리케이션, 어떠한 비즈니스 워크로드 등에 상관없이 ABLESTACK이 솔루션을
      제공합니다.
      <br />
      ABLESTACK은 기업의 비즈니스 및 IT혁신을 위한 필수적인 솔루션입니다.
    </>
  ),
  bgClassName: 'bg-application-header',
  heightClassName: 'min-h-[450px] lg:min-h-[506px]',
  buttonData: {
    text: '개요 보러가기',
    href: '/',
  },
};

export const applicationsType = ['infra', 'application', 'dev'] as const;

export const applicationsTabs = [
  { text: 'Infra', href: '/applications/infra' },
  { text: 'Application', href: '/applications/application' },
  { text: 'Dev', href: '/applications/dev' },
];

export const applicationList: { [K in ApplicationType]: ApplicationListData[] } = {
  infra: [
    {
      imgSrc: serverVirtualizationSrc,
      path: 'server-virtualization',
      title: '서버가상화',
      description:
        '기업에서 실행하는 모든 인프라와 애플리케이션을 가상화 하여 민첩성과 효율성을 극대화 하십시오.',
    },
    {
      imgSrc: privateCloudSrc,
      path: 'private-cloud',
      title: '프라이빗 클라우드',
      description:
        '필요에 따라 언제든지 확장할 수 있고 모든 앱을 실행할 수 있는 HCI 기반 클라우드로 비즈니스를 강화하십시오.',
    },
    {
      imgSrc: hybridCloudSrc,
      path: 'hybrid-cloud',
      title: '하이브리드 클라우드',
      description:
        'ABLESTACK을 사용하여 온프레미스 인프라를 퍼블릭 클라우드로 원활하게 확장할 수 있습니다.',
    },
    {
      imgSrc: edgeComputingSrc,
      path: 'edge-computing',
      title: '엣지컴퓨팅',
      description:
        '컴팩트한 하이퍼컨버징 기술로 엣지 사이트의 인프라를 지원하고 전문인력 지원을 경감합니다.',
    },
    {
      imgSrc: securityInfraSrc,
      path: 'security-infra',
      title: '보안 인프라',
      description:
        '제로 트러스트 정책을 적용하여 효과적으로 사이버 공격 및 데이터 손실을 방지 솔루션을 제공합니다.',
    },
    {
      imgSrc: backupRecoverySrc,
      path: 'backup-recovery',
      title: '백업 및 복구',
      description: '가상환경 뿐 아니라 레거시 환경에 대한 통합 백업 및 복구를 지원합니다.',
    },
    {
      imgSrc: businessContinuitySrc,
      path: 'business-continuity',
      title: '비즈니스 연속성/재해복구',
      description:
        '빅전체 데이터 백업 및 다양한 복구 옵션을 통해 연속성을 보장함함으로써 저비용으로 SLA를 충족하심시오.',
    },
  ],
  application: [
    {
      imgSrc: bigDataAnalysisSrc,
      path: 'big-data-analysis',
      title: '빅데이터 분석',
      description:
        '빅 데이터 애플리케이션을 위한 클라우드 HCI의 민첩성과 온프레이스 관리 편리성을 활용하십시오.',
    },
    {
      imgSrc: aiMlSrc,
      path: 'ai-ml',
      title: '인공지능/머신러닝',
      description: '빠르고 확장이 간편한 AI 지원 인프라를 통해 AI/ML 이니셔티브를 얻으십시오.',
    },
    {
      imgSrc: virtualDesktopDaasSrc,
      path: 'virtual-desktop-daas',
      title: '가상데스크톱/DaaS',
      description:
        '회사 직원들을 위한 디지털 작업 공간을 제공하여 업무 환경에 더 큰 유연성을 제공하여 업무 생산성을 높이십시오.',
    },
    {
      imgSrc: databaseSrc,
      path: 'database',
      title: '데이터베이스',
      description:
        '다양한 상용 데이터베이스 배포를 위한 ABLESTACK 솔루션을 통해 안정적인 운영 및 통찰력을 확보하십시오.',
    },
    {
      imgSrc: electronicDocumentSrc,
      path: 'electronic-document',
      title: '전자문서 유통관리',
      description:
        '강력한 내결함성 및 원본 유지 기능을 통해 기업 내부의 중요한 전자문서의 유통 및 관리 및  중앙화를 지원합니다.',
    },
    {
      imgSrc: callCenterSrc,
      path: 'call-center',
      title: '콜센터 시스템',
      description:
        '언제 어디서나, 어떠한 장치에서든 액세스할 수 콜센터 시스템을 구성할 수 있습니다.',
    },
  ],
  dev: [
    {
      imgSrc: devTestSrc,
      path: 'dev-test',
      title: '개발/테스트',
      description:
        '효율적이고 민첩한 개발 및 테스트 환경을 통해 생산성을 높이고 출시사이클 단축을 통해 수익을 높일수 있습니다.',
    },
    {
      imgSrc: devopsOperationsSrc,
      path: 'devops-operations',
      title: '데브옵스/IT운영',
      description:
        'IT 자동화 및 DevOps를 위한 모범 사례를 통해 기업 클라우드의 비용을 절감하고 IT서비스를 가속화합니다.',
    },
    {
      imgSrc: ciCdSrc,
      path: 'ci-cd',
      title: 'CI/CD',
      description:
        'HCI 기반의 클라우드 환경을 통해 빠르게 개발환경을 지원하고 통합하여 애플리케이션 생명주기를 단축합니다.',
    },
  ],
};
