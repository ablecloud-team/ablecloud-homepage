import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
}

export function Button({ text, href, className }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <div
          className={`${className} bg-[#202020] text-white text-sm font-bold py-[14px] px-[34px] rounded-full transition duration-300 select-none cursor-pointer hover:brightness-90`}>
          {text}
        </div>
      </Link>
    );
  }
  return (
    <div
      className={`${className} bg-[#202020] text-white text-sm font-bold py-[14px] px-[34px] rounded-full transition duration-300 select-none cursor-pointer hover:brightness-90`}>
      {text}
    </div>
  );
}
