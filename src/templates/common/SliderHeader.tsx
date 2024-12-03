'use client';

import React, { useRef, useState } from 'react';

import { HeaderData } from '@/types/header';

import ArrowLeft from '@/public/icons/common/arrow-left.svg';
import ArrowRight from '@/public/icons/common/arrow-right.svg';
import Pause from '@/public/icons/common/pause.svg';
import Slider from 'react-slick';

import { MainPageHeader } from './MainPageHeader';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 5000,
};

interface SliderHeaderProps {
  sliderData: HeaderData[];
}

export function SliderHeader({ sliderData }: SliderHeaderProps) {
  const sliderRef = useRef<Slider>(null);
  const [isPause, setIsPause] = useState<boolean>(false);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };

  const sliderPlayControl = () => {
    if (isPause) {
      sliderRef.current?.slickPlay();
    } else {
      sliderRef.current?.slickPause();
    }

    setIsPause(prev => !prev);
  };

  if (sliderData.length === 1) return <MainPageHeader headerData={sliderData[0]} />;

  return (
    <div className='relative'>
      <div className='flex gap-4 absolute px-6 pb-3 z-50 bottom-[48px] left-1/2 transform -translate-x-1/2'>
        <ArrowLeft onClick={sliderPrev} />
        <ArrowRight onClick={sliderNext} />
        {isPause ? (
          <div onClick={sliderPlayControl}>play</div>
        ) : (
          <Pause onClick={sliderPlayControl} />
        )}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((v, idx) => {
          return <MainPageHeader key={idx} headerData={v} />;
        })}
      </Slider>
    </div>
  );
}
