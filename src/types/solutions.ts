import { StaticImageData } from 'next/image';

import { solutionNames } from '@/constants/solutions';

export type SolutionNames = (typeof solutionNames)[number];

export interface SolutionListData {
  imgSrc: StaticImageData;
  path: SolutionNames;
  title: string;
  description: string;
}
