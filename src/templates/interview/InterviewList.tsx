import { useTranslations } from 'next-intl';

import { InterviewHistoryData } from '@/types/interview';

export function InterViewList({ interviewList }: { interviewList: InterviewHistoryData[] }) {
  const t = useTranslations();

  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[30px] md:leading-[43px] pb-5'>
        {t('interview.title')}
      </div>
      <div className='flex w-full max-w-[1298px] flex-col gap-8'>
        {interviewList.map(({ category, data }, catIdx) => (
          <section key={catIdx} className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold text-[#222]'>{category}</h2>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6'>
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className='flex h-[140px] items-center justify-center rounded-[10px] border border-[#EBEEF5] bg-white px-6 py-4'>
                  {item.img}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
