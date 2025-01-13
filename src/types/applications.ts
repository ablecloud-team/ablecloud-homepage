import { StaticImageData } from 'next/image';

import { applicationNames, applicationsType } from '@/constants/applications';

export type ApplicationType = (typeof applicationsType)[number];

export type ApplicationNames = (typeof applicationNames)[number];

export interface ApplicationListData {
  imgSrc: StaticImageData;
  path: ApplicationNames;
  title: string;
  description: string;
}
