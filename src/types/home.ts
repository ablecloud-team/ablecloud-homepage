import { ReactNode } from 'react';

import { ButtonData } from '@/types/ui';

export interface HomeSolutionCardData {
  title: string;
  description: string | ReactNode;
  bgClassName: string;
}

export interface HomeMainCardData {
  title: string | ReactNode;
  href: string;
  bgClassName: string;
}

export interface HomeFooterCardsData {
  category: string;
  bgColor: string;
  text: string | ReactNode;
  buttonData: ButtonData;
}
