import { StaticImageData } from 'next/image';

import { applicationNames } from '@/constants/applications';

export type ApplicationNames = (typeof applicationNames)[number];

export interface ApplicationListData {
  imgSrc: StaticImageData;
  path: ApplicationNames;
  title: string;
  description: string;
}
