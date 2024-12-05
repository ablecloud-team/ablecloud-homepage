'use client';

import Link from 'next/link';

import { useEffect, useMemo, useState } from 'react';

import Ablestack from '@/public/icons/common/ablestack.svg';
import Close from '@/public/icons/common/close.svg';
import Hamburger from '@/public/icons/common/hamburger.svg';

const menuItems = [
  { title: '제품', href: '/' },
  { title: '솔루션', href: '/' },
  { title: '성공사례', href: '/' },
  { title: '파트너', href: '/' },
  { title: '리소스', href: '/' },
  { title: '제품문의', href: '/' },
  { title: '회사소개', href: '/' },
];

export function Header() {
  const [scrollPosition, setScrollPosition] = useState<'top' | 'middle' | 'bottom'>('top');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setScrollPosition('top');
      } else if (currentScrollPos < 660) {
        setScrollPosition('middle');
      } else {
        setScrollPosition('bottom');
      }
    };
    listener();
    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, []);

  const bgStyle = useMemo(() => {
    if (scrollPosition === 'top') return 'md:bg-black md:bg-opacity-10';
    if (scrollPosition === 'middle') return 'md:bg-black md:bg-opacity-10 md:backdrop-blur-2xl';
    return 'md:bg-white md:text-black';
  }, [scrollPosition]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed flex flex-col z-50 w-full items-center ${isMenuOpen ? 'bg-white text-black' : 'text-white bg-[#202020]'} ${bgStyle}`}>
      <div
        className={`flex max-w-[1440px] w-full items-center ${isMenuOpen ? 'justify-end' : 'justify-between'} px-[19px] py-[15px]`}>
        {!isMenuOpen && (
          <Link href={'/'}>
            <Ablestack />
          </Link>
        )}
        <div className='gap-5 px-[10px] font-bold hidden md:flex'>
          {menuItems.map((v, index) => (
            <Link href={v.href} key={index}>
              {v.title}
            </Link>
          ))}
        </div>
        <div className='cursor-pointer select-none border px-[17px] py-[7.5px] text-[13px] leading-[13px] rounded-md hidden lg:flex'>
          Contact Us
        </div>
        <div
          className='cursor-pointer flex md:hidden'
          onClick={() => {
            setIsMenuOpen(prev => !prev);
          }}>
          {isMenuOpen ? <Close /> : <Hamburger />}
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className='fixed top-0 left-0 w-full h-[40%] bg-black bg-opacity-50 z-40'
            onClick={() => setIsMenuOpen(false)}></div>
          <div className='fixed top-0 left-0 right-0 w-full max-h-[40%] bg-white z-50 flex flex-col p-6 shadow-lg'>
            <div className='flex justify-end p-4'>
              <button onClick={() => setIsMenuOpen(false)}>
                <Close />
              </button>
            </div>
            <div className='flex flex-col items-start'>
              {menuItems.map((v, index) => (
                <Link
                  href={v.href}
                  key={index}
                  className='text-[18px] leading-[27px] font-bold py-3'
                  onClick={() => setIsMenuOpen(false)}>
                  {v.title}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
