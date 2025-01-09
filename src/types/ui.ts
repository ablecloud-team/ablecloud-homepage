import { LinkProps } from 'next/link';

import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface ButtonData extends LinkProps {
  text: string | ReactNode;
  target?: HTMLAttributeAnchorTarget;
  download?: boolean;
  color?: 'black' | 'white';
  className?: string;
}
