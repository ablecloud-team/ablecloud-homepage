import { ReactNode, useMemo } from 'react';

interface ContentWrapperProps {
  type?: 'default' | 'products' | 'applications' | 'resource' | 'interview' | 'contact' | 'company';
  isNonePaddingTop?: boolean;
  bgClassName?: string;
  children: ReactNode;
}

export function ContentWrapper({
  type = 'default',
  bgClassName = 'bg-white',
  isNonePaddingTop,
  children,
}: ContentWrapperProps) {
  const paddingClassName = useMemo(() => {
    if (isNonePaddingTop) return 'pb-12';

    if (type === 'products' || type === 'contact') return 'py-8';

    if (type === 'interview') return 'pt-[38px] pb-12';

    if (type === 'resource' || type === 'applications' || type === 'company') return 'pt-3 pb-12';

    return 'py-12';
  }, [type]);

  return (
    <div className={`flex justify-center w-full break-keep ${paddingClassName} ${bgClassName}`}>
      <div
        className={`w-full max-w-[1472px] px-4 ${isNonePaddingTop ? 'pb-3' : 'py-3'} overflow-hidden`}>
        {children}
      </div>
    </div>
  );
}
