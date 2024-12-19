import Image from 'next/image';

import { HeaderData } from '@/types/header';
import { InterviewListData } from '@/types/interview';

import armySrc from '@/public/images/common/army.png';
import cnuhSrc from '@/public/images/common/cnuh.png';
import comwelSrc from '@/public/images/common/comwel.png';
import cooconSrc from '@/public/images/common/coocon.png';
import dapaSrc from '@/public/images/common/dapa.png';
import datastreamsSrc from '@/public/images/common/datastreams.png';
import datqSrc from '@/public/images/common/datq.png';
import ekrSrc from '@/public/images/common/ekr.png';
import gbSrc from '@/public/images/common/gb.png';
import gntelSrc from '@/public/images/common/gntel.png';
import goryeongSrc from '@/public/images/common/goryeong.png';
import gyeongnamSrc from '@/public/images/common/gyeongnam.png';
import hcSrc from '@/public/images/common/hc.png';
import kacptaSrc from '@/public/images/common/kacpta.png';
import kepcoSrc from '@/public/images/common/kepco.png';
import kipoSrc from '@/public/images/common/kipo.png';
import pyeongtaekSrc from '@/public/images/common/pyeongtaek.png';
import sangjuSrc from '@/public/images/common/sangju.png';
import spoSrc from '@/public/images/common/spo.png';
import t3qSrc from '@/public/images/common/t3q.png';
import uscSrc from '@/public/images/common/usc.png';
import ycgSrc from '@/public/images/common/ycg.png';
import yitSrc from '@/public/images/common/yit.png';

export const interviewHeaderData: HeaderData = {
  title: {
    mainText: '고객사',
  },
  description: (
    <div className='max-w-[699px]'>
      ABESTACK은 어떠한 애플리케이션이든 사용 환경이나 산업 환경과 상관없이 모두 처리할 수 있으며
      최신의 이머징 워크로드도 원활하게 배포하여 운영할 수 있는 유연성과 확정성, 안정성을
      제공합니다.
    </div>
  ),
  bgClassName: 'bg-interview-header',
  heightClassName: 'min-h-[350px] lg:min-h-[404px]',
};

export const interviewList: InterviewListData[] = [
  { img: <Image src={comwelSrc} alt='' width={73} />, text: '근로복지공단' },
  { img: <Image src={gyeongnamSrc} alt='' width={120} />, text: '경상남도청' },
  { img: <Image src={kipoSrc} alt='' width={96} />, text: '특허청' },
  { img: <Image src={hcSrc} alt='' width={85} />, text: '합천군청' },
  { img: <Image src={spoSrc} alt='' width={53} />, text: '대검찰청' },
  { img: <Image src={sangjuSrc} alt='' width={105} />, text: '상주시청' },
  { img: <Image src={kepcoSrc} alt='' width={120} />, text: '한국전력공사' },
  { img: <Image src={dapaSrc} alt='' width={50} />, text: '방위사업청' },
  { img: <Image src={ycgSrc} alt='' width={111} />, text: '예천군청' },
  { img: <Image src={goryeongSrc} alt='' width={102} />, text: '고령군청' },
  { img: <Image src={pyeongtaekSrc} alt='' width={41} />, text: '평택시청' },
  { img: <Image src={uscSrc} alt='' width={112} />, text: '의성군청' },
  { img: <Image src={cooconSrc} alt='' width={120} />, text: '쿠콘' },
  { img: <Image src={gbSrc} alt='' width={110} />, text: '경상북도청' },
  { img: <Image src={cnuhSrc} alt='' width={120} />, text: '충남대학교병원' },
  { img: <Image src={armySrc} alt='' width={57} />, text: '육군본부' },
  { img: <Image src={ekrSrc} alt='' width={120} />, text: '한국농어촌공사' },
  { img: <Image src={t3qSrc} alt='' width={100} />, text: '(주)티쓰리큐' },
  { img: <Image src={datqSrc} alt='' width={62} />, text: '국방기술품질원' },
  { img: <Image src={kacptaSrc} alt='' width={115} />, text: '한국세무사회' },
  { img: <Image src={datastreamsSrc} alt='' width={120} />, text: '데이타스트림즈' },
  { img: <Image src={yitSrc} alt='' width={101} />, text: '여주대학교' },
  { img: <Image src={gntelSrc} alt='' width={104} />, text: '지엔텔' },
];
