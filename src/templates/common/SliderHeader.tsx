'use client';

import React, { useRef, useState } from 'react';

import { MainPageHeader } from '@/templates/common';

import { HeaderData } from '@/types/header';

import ChevronLeft from '@/public/icons/common/chevron-left.svg';
import ChevronRight from '@/public/icons/common/chevron-right.svg';
import Pause from '@/public/icons/common/pause.svg';
import Start from '@/public/icons/common/start.svg';

import Slider from 'react-slick';

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
      <div className='flex items-center gap-4 absolute px-6 pb-3 z-10 bottom-[28px] left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 [&>svg]:cursor-pointer [&>svg]:text-white'>
        <ChevronLeft width={36} onClick={sliderPrev} />
        <ChevronRight width={36} onClick={sliderNext} />
        {isPause ? (
          <div
            onClick={sliderPlayControl}
            className='w-9 h-9 flex items-center justify-center cursor-pointer'>
            <Start />
          </div>
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
