import { StaticImageData } from 'next/image';

import { compatibilityType, resourceType } from '@/constants/resource';

export type ResourceType = (typeof resourceType)[number];
export type CompatibilityType = (typeof compatibilityType)[number];

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
  date: string;
}

export interface CompatibilityData {
  title: string;
  descriptionList: {
    description: string;
    list: string[];
  }[];
}

export interface CompatibilityCatalogRow {
  id: string;
  name: string;
  imageLabel?: string;
  imageSrc?: string;
  support: string[];
  notes?: string[];
}

export interface CompatibilityCatalogSection {
  key: string;
  categoryLabel: string;
  title: string;
  description?: string;
  headerLabels?: {
    name: string;
    image: string;
    support: string;
    note: string;
  };
  rows: CompatibilityCatalogRow[];
}

export interface CompatibilityCatalogLabels {
  category: string;
  search: string;
  all: string;
  placeholder: string;
  searchButton: string;
  noResultsTitle: string;
  noResultsDescription: string;
  productColumn: string;
  imageColumn: string;
  supportColumn: string;
  noteColumn: string;
}
