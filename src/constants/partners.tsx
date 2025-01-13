import Image from 'next/image';

import { HeaderData } from '@/types/header';
import { PartnerListData } from '@/types/partners';

import ssoftSrc from '@/public/images/partners/3ssoft.png';
import ablestoreSrc from '@/public/images/partners/ablestor.png';
import acornsoftSrc from '@/public/images/partners/acornsoft.png';
import ajictSrc from '@/public/images/partners/ajict.png';
import centecSrc from '@/public/images/partners/centec.png';
import citrixSrc from '@/public/images/partners/citrix.png';
import dellSrc from '@/public/images/partners/dell.png';
import dwctsSrc from '@/public/images/partners/dwcts.png';
import fujitsuSrc from '@/public/images/partners/fujitsu.png';
import geomexSrc from '@/public/images/partners/geomex.png';
import gntelSrc from '@/public/images/partners/gntel.png';
import hdnSrc from '@/public/images/partners/hdn.png';
import hpSrc from '@/public/images/partners/hp.png';
import hsSrc from '@/public/images/partners/hs.png';
import infracubeSrc from '@/public/images/partners/infracube.png';
import innodepSrc from '@/public/images/partners/innodep.png';
import innogridSrc from '@/public/images/partners/innogrid.png';
import innotiumSrc from '@/public/images/partners/innotium.png';
import itcenSrc from '@/public/images/partners/itcen.png';
import ktnfSrc from '@/public/images/partners/ktnf.png';
import lenovoSrc from '@/public/images/partners/lenovo.png';
import nhncrossentSrc from '@/public/images/partners/nhncrossent.png';
import oceanSrc from '@/public/images/partners/ocean.png';
import skshieldusSrc from '@/public/images/partners/skshieldus.png';
import snaSrc from '@/public/images/partners/sna.png';
import superSrc from '@/public/images/partners/super.png';
import supermicrSrc from '@/public/images/partners/supermicr.png';
import t3qSrc from '@/public/images/partners/t3q.png';
import tilonSrc from '@/public/images/partners/tilon.png';
import uniwideSrc from '@/public/images/partners/uniwide.png';
import xenoSrc from '@/public/images/partners/xeno.png';
import xslabSrc from '@/public/images/partners/xslab.png';
import zungwonSrc from '@/public/images/partners/zungwon.png';

export const partnersHeaderData: HeaderData = {
  title: {
    mainText: '파트너',
  },
  description: (
    <>
      독자적인 기술력, 지속 가능한 수익창출.
      <br />
      ABLESTACK 플랫폼 설계 및 글로벌 성장을 위해 HCI 시장의 공동 성장을 만들어갈 파트너를 찾습니다.
    </>
  ),
  bgClassName: 'bg-partners-header',
  heightClassName: 'min-h-[350px] lg:min-h-[404px]',
};

export const partnerProgramHeaderData: HeaderData = {
  title: {
    mainText: 'Partnership Program',
  },
  description: (
    <>
      독자적인 기술력, 지속 가능한 수익창출. <br />
      에이블클라우드는 ABLESTACK 플랫폼 설계 및 글로벌 성장을 위해 HCI 시장의 공동 성장을 만들어갈
      파트너를 찾습니다.
    </>
  ),
  bgClassName: 'bg-partners-header',
  heightClassName: 'min-h-[350px] lg:min-h-[404px]',
};

export const partnersIntroduce = [
  {
    title: '판매/기술지원 파트너',
    description: (
      <>
        ABLESTACK을 고객에게 직접 소개하고 제공하며 종합적인 지원서비스를 제공하는 파트너입니다.{' '}
        <br />
        전담 영업 조직 및 기술지원 조직을 운영하며, 모든 분야에서 긴밀하게 협업하는 파트너입니다.
      </>
    ),
  },
  {
    title: '솔루션 파트너',
    description: (
      <>
        고객에게 필요한 어플리케이션을 제공하는 파트너로서 빅데이터, 가상데스크톱, 영상감시,
        데이터베이스 등을 검증된 아키텍처를 통해 <br />
        최적의 상태로 고객에게 통합하여 턴키로 제공합니다.
      </>
    ),
  },
  {
    title: '판매/기술지원 파트너',
    description:
      'ABLESTACK을 설치하고 운영하기 위한 x86 서버 제품 및 블록 및 백업 스토리지를 제공하는 파트너로, 철저한 검증을 거쳐 최적의 아키텍처를 제공하고, 안정적인 가상화 환경을 제공하기 위한 서버, 스토리지, 네트워크 파트너입니다.',
  },
];

export const partnerList: PartnerListData[] = [
  { img: <Image src={ablestoreSrc} alt='' />, text: '에이블스토어' },
  { img: <Image src={dellSrc} alt='' />, text: '델 테크놀로지스' },
  { img: <Image src={hpSrc} alt='' />, text: 'hp' },
  { img: <Image src={fujitsuSrc} alt='' />, text: '후지쯔' },
  { img: <Image src={lenovoSrc} alt='' />, text: '레노버' },
  { img: <Image src={supermicrSrc} alt='' />, text: '슈퍼마이크로컴퓨터' },
  { img: <Image src={superSrc} alt='' />, text: '슈퍼솔루션' },
  { img: <Image src={ktnfSrc} alt='' />, text: '케이티엔에프' },
  { img: <Image src={uniwideSrc} alt='' />, text: '유니와이드' },
  { img: <Image src={oceanSrc} alt='' />, text: '오우션 테크놀로지' },
  { img: <Image src={citrixSrc} alt='' />, text: '시트릭스' },
  { img: <Image src={tilonSrc} alt='' />, text: '틸론' },
  { img: <Image src={xenoSrc} alt='' />, text: '제노솔루션' },
  { img: <Image src={nhncrossentSrc} alt='' />, text: 'NHN크로센트(주)' },
  { img: <Image src={hdnSrc} alt='' />, text: '한드림넷' },
  { img: <Image src={innogridSrc} alt='' />, text: '이노그리드' },
  { img: <Image src={acornsoftSrc} alt='' />, text: '아콘소프트' },
  { img: <Image src={innotiumSrc} alt='' />, text: '이노티움' },
  { img: <Image src={t3qSrc} alt='' />, text: '티쓰리큐' },
  { img: <Image src={innodepSrc} alt='' />, text: '이노뎁' },
  { img: <Image src={xslabSrc} alt='' />, text: '엑세스랩' },
  { img: <Image src={hsSrc} alt='' />, text: '효성인포메이션시스템' },
  { img: <Image src={zungwonSrc} alt='' />, text: '정원엔시스' },
  { img: <Image src={ajictSrc} alt='' />, text: '에이제이아이씨티' },
  { img: <Image src={skshieldusSrc} alt='' />, text: 'SK쉴더스' },
  { img: <Image src={gntelSrc} alt='' />, text: '지엔텔' },
  { img: <Image src={itcenSrc} alt='' />, text: '아이티센 클로잇' },
  { img: <Image src={snaSrc} alt='' />, text: '에스엔에이' },
  { img: <Image src={dwctsSrc} alt='' />, text: '대원 CTS' },
  { img: <Image src={geomexSrc} alt='' />, text: '지오멕스소프트' },
];
