import { getLocale, getTranslations } from 'next-intl/server';

import { getPosts } from '@/util/getPost';

import {
  getHomeApplicationCards,
  getHomeFooterCards,
  getHomeMainCardsData,
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
  const locale = await getLocale();

  const t = await getTranslations('home');

  return (
    <>
      <SliderHeader sliderData={homeSliderData} />
      <ContentWrapper>
        <HomeMainCards title={t('mainCardTitle')} cardsData={await getHomeMainCardsData()} />
        <HomeApplicationCards
          title={t('mainApplicationCard')}
          detailText={t('applicationCard.detail')}
          cardsData={await getHomeApplicationCards()}
        />
      </ContentWrapper>
      <ContentWrapper bgClassName='bg-[#DDE8FF]'>
        <HomeInterview title={t('mainInterviewTitle')} detailText={t('interviewDetail')} />
      </ContentWrapper>
      {locale === 'ko' ? (
        <>
          <ContentWrapper>
            <HomeBlogCards
              title={t('mainBlogCardTitle')}
              detailText={t('blogDetail')}
              postsData={postsData.filter(v => !!v.metaData.mainImgSrc).slice(0, 4)}
            />
          </ContentWrapper>
        </>
      ) : (
        <></>
      )}
      <ContentWrapper>
        <HomeFooterCards cardsData={await getHomeFooterCards()} />
      </ContentWrapper>
    </>
  );
}
