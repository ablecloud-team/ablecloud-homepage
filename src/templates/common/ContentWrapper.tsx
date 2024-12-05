import { ReactNode } from 'react';

interface ContentWrapperProps {
  bgClassName?: string;
  children: ReactNode;
}

export function ContentWrapper({ bgClassName = 'bg-white', children }: ContentWrapperProps) {
  return (
    <div className={`flex justify-center w-full py-[60px] px-4 break-keep ${bgClassName}`}>
      <div className='w-full max-w-[1440px] overflow-x-hidden'>{children}</div>
    </div>
  );
}
