import { StaticImageData } from 'next/image';

import { ablestackServices } from '@/constants/products';

export type AbleStackServices = (typeof ablestackServices)[number];

export interface AblestackService {
  path: AbleStackServices;
  title: string;
  description: string;
}

export interface AblestackListData {
  title: string;
  ablestackService: AblestackService[];
}

export interface ProductContentData {
  imgSrc: StaticImageData;
  description?: string;
  subDescriptions: string[];
}
