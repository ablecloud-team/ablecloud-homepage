import { MainSliderData } from '@/constants/main';

import { SliderHeader } from '@/templates/common';

export default function Home() {
  return (
    <>
      <SliderHeader sliderData={MainSliderData} />
    </>
  );
}
