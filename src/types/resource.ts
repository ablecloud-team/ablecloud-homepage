import { StaticImageData } from 'next/image';

import { resourceType } from '@/constants/resource';

export type ResourceType = (typeof resourceType)[number];

export interface MdxMetaData {
  id: number;
  title: string;
  mainImgSrc: string;
  updatedAt: string;
}

export interface BlogData {
  body: {
    content: string;
    stringValue: string;
  };
  metaData: MdxMetaData;
}

export interface EbookData {
  type: string;
  title: string;
  description: string;
  href: string;
  imgSrc: StaticImageData;
}
