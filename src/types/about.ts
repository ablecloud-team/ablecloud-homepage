import { StaticImageData } from 'next/image';

export interface AboutCardData {
  imgSrc: StaticImageData;
  title: string | JSX.Element;
}
