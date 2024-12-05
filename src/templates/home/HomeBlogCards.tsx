import { Button } from '@/components/ui';

interface HomeBlogCardsProps {}

const exampleData = [
  {
    title: 'blade server',
    date: '2024.06.28',
  },
  {
    title: '에이블클라우드 ‘에이블스택’, 국정보안인증 획득',
    date: '2024.06.28',
  },
  {
    title: 'V사를 완벽하게 대체할 수 있는 플랫폼 영구 라이센스를 제공하는 ABLESTACK..',
    date: '2024.06.28',
  },
  {
    title: 'blade server',
    date: '2024.06.28',
  },
];

export function HomeBlogCards() {
  return (
    <div className='flex flex-col gap-[30px] items-center'>
      <div className='font-bold text-center text-[24px] leading-[32px] md:text-[32px] md:leading-[44.16px]'>
        에이블클라우드의 새로운 소식
      </div>
      <div className='flex gap-4'>
        {exampleData.map((v, idx) => {
          return (
            <div key={idx} className='w-[305px] border border-[#DADADA] rounded-[22px]'>
              <div className='flex items-center justify-center h-[150px] border-b border-[#DADADA]'>
                image
              </div>
              <div className='p-[30px]'>
                <div className='flex-1'>{v.title}</div>
                <div>{v.date}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        buttonData={{
          className: 'border border-[#202020]',
          text: '새로운 소식 더보기',
          href: '/',
          color: 'white',
        }}
      />
    </div>
  );
}
