import { getTranslations } from 'next-intl/server';

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

  const t = await getTranslations('home');

  return (
    <>
      <SliderHeader sliderData={homeSliderData} />
      <ContentWrapper>
        <HomeMainCards title={t('mainCardTitle')} cardsData={homeMainCardsData} />
        <HomeApplicationCards
          title={t('mainApplicationCard')}
          cardsData={homeApplicationCardsData}
        />
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-[#DDE8FF]'>
        <HomeInterview title={t('mainInterviewTitle')} />
      </ContentWrapper>
      <ContentWrapper>
        <HomeBlogCards
          title={t('mainBlogCardTitle')}
          postsData={postsData.filter(v => !!v.metaData.mainImgSrc).slice(0, 4)}
        />
      </ContentWrapper>
      <ContentWrapper>
        <HomeFooterCards cardsData={homeFooterCardsData} />
      </ContentWrapper>
    </>
  );
}
