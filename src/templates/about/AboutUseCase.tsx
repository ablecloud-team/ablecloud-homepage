import { ReactNode } from 'react';

interface AboutUseCaseProps {
  description: string | ReactNode;
  children?: ReactNode;
}

export function AboutUseCase({ children, description }: AboutUseCaseProps) {
  return (
    <div className='flex flex-col gap-8 text-white text-center'>
      <div className='font-bold text-[24px] leading-[32px] md:text-[30px] md:leading-[43px]'>
        적용 사례
      </div>
      <div>{description}</div>
      {children}
    </div>
  );
}
