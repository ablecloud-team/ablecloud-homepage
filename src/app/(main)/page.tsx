import { getPosts } from '@/util/getPost';

import {
  homeApplicationCardsData,
  homeFooterCardsData,
  homeMainCardsData,
  homeSliderData,
} from '@/constants/home';

import { ContentWrapper, SliderHeader } from '@/templates/common';
import {
  HomeApplicationCards,
  HomeBlogCards,
  HomeFooterCards,
  HomeInterview,
  HomeMainCards,
} from '@/templates/home';

export default async function Home() {
  const { postsData } = await getPosts();

  return (
    <>
      <SliderHeader sliderData={homeSliderData} />
      <ContentWrapper>
        <HomeMainCards title='SDDC를 실현하는 획기적인 플랫폼' cardsData={homeMainCardsData} />
        <HomeApplicationCards
          title='ABLESTACK을 선택해야 하는 이유'
          cardsData={homeApplicationCardsData}
        />
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-[#DDE8FF]'>
        <HomeInterview title='최고의 가상화 플랫폼, ABLESTACK을 선택한 기업들' />
      </ContentWrapper>
      <ContentWrapper>
        <HomeBlogCards postsData={postsData.filter(v => !!v.metaData.mainImgSrc).slice(0, 4)} />
      </ContentWrapper>
      <ContentWrapper>
        <HomeFooterCards cardsData={homeFooterCardsData} />
      </ContentWrapper>
    </>
  );
}
