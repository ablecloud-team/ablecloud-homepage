import { ReactNode } from 'react';

export interface ButtonData {
  text: string | ReactNode;
  href: string;
  color?: 'black' | 'white';
  className?: string;
}
