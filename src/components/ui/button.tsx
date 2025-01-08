import Link from 'next/link';

import { ButtonData } from '@/types/ui';

interface ButtonProps {
  buttonData: ButtonData;
}

export function Button({ buttonData }: ButtonProps) {
  const { text, className, color, href } = buttonData;

  const colorClassName = color === 'white' ? 'bg-white text-[#202020]' : 'bg-[#202020] text-white';

  return (
    <Link href={href}>
      <div
        className={`${colorClassName} text-sm font-bold py-[14px] px-[34px] rounded-full transition duration-300 select-none cursor-pointer hover:brightness-90 ${className}`}>
        {text}
      </div>
    </Link>
  );
}
