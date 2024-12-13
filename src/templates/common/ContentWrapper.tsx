import { ReactNode } from 'react';

interface ContentWrapperProps {
  type?: 'default' | 'products' | 'applications' | 'resource';
  bgClassName?: string;
  children: ReactNode;
}

export function ContentWrapper({
  type = 'default',
  bgClassName = 'bg-white',
  children,
}: ContentWrapperProps) {
  if (type === 'products')
    return (
      <div className={`flex justify-center w-full py-8 break-keep ${bgClassName}`}>
        <div className='w-full max-w-[1472px] overflow-hidden'>{children}</div>
      </div>
    );

  if (type === 'applications') {
    return (
      <div className={`flex justify-center w-full pt-[38px] pb-12 break-keep ${bgClassName}`}>
        <div className='w-full max-w-[1472px] px-4 py-3 overflow-hidden'>{children}</div>
      </div>
    );
  }

  if (type === 'resource') {
    return (
      <div className={`flex justify-center w-full pt-3 pb-12 break-keep ${bgClassName}`}>
        <div className='w-full max-w-[1472px] px-4 py-3 overflow-hidden'>{children}</div>
      </div>
    );
  }

  return (
    <div className={`flex justify-center w-full py-12 break-keep ${bgClassName}`}>
      <div className='w-full max-w-[1472px] px-4 py-3 overflow-hidden'>{children}</div>
    </div>
  );
}
