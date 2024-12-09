import { ReactNode } from 'react';

import { ButtonData } from '@/types/ui';

export interface HeaderData {
  title: {
    mainText: string | ReactNode;
    subText?: string;
  };
  description: string | ReactNode;
  bgClassName: string;
  heightClassName: string;
  buttonData?: ButtonData;
}

export interface ProductHeaderData {
  title: string | ReactNode;
  description: string | ReactNode;
  descriptionMaxWidth: string;
  bgClassName: string;
  contentMaxWidth?: string;
}
