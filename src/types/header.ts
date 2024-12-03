import { ReactNode } from 'react';

export interface HeaderData {
  title: {
    mainText: string | ReactNode;
    subText?: string;
  };
  description: string | ReactNode;
  bgClassName: string;
  heightClassName: string;
  button?: {
    text: string;
    href?: string;
    className?: string;
  };
}
