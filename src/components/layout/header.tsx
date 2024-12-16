'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useEffect, useMemo, useState } from 'react';

import { headerMenu, pageHeaderHeight } from '@/constants/common';

import Ablestack from '@/public/icons/common/ablestack.svg';
import Close from '@/public/icons/common/close.svg';
import Hamburger from '@/public/icons/common/hamburger.svg';

export function Header() {
  const [scrollPosition, setScrollPosition] = useState<'top' | 'middle' | 'bottom'>('top');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const pathName = usePathname();

  const headerHeight = useMemo(() => {
    if (pathName.startsWith('/interview')) return pageHeaderHeight.interview;
    if (pathName.startsWith('/resource')) return pageHeaderHeight.resource;
    if (pathName.startsWith('/products/ablestack/')) return pageHeaderHeight.productDetail;

    return pageHeaderHeight.common;
  }, [pathName]);

  useEffect(() => {
    const listener = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setScrollPosition('top');
      } else if (currentScrollPos < headerHeight - 60) {
        setScrollPosition('middle');
      } else {
        setScrollPosition('bottom');
      }
    };
    listener();
    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, [headerHeight]);

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
      className={`flex flex-col z-50 w-full items-center ${isMenuOpen ? 'bg-white text-black' : 'text-white bg-[#202020]'} md:fixed ${bgStyle}`}>
      <div
        className={`flex max-w-[1440px] w-full items-center ${isMenuOpen ? 'justify-end' : 'justify-between'} pl-[19px] pr-[19px] md:pr-[55px] xl:pr-[19px] h-[60px]`}>
        {!isMenuOpen && (
          <Link href={'/'}>
            <Ablestack />
          </Link>
        )}
        <div className='gap-5 px-[10px] font-bold hidden cursor-pointer md:flex'>
          {headerMenu.map((v, index) => (
            <div className='relative group' key={index}>
              <Link
                href={v.href}
                className={`${scrollPosition === 'bottom' ? 'hover:text-[#202020]' : 'hover:text-[#f5f5f5]'} py-2 block`}>
                {v.title}
              </Link>
              {v.subMenu && (
                <div className='absolute p-[14px] rounded-lg left-1/2 -translate-x-1/2 w-[170px] bg-black text-white opacity-0 transform pointer-events-none group-hover:pointer-events-auto translate-y-4 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0'>
                  {v.subMenu?.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <Link
                        href={subItem.href}
                        className='block py-2 text-[#ddd] text-[14px] duration-100 hover:text-white rounded'>
                        {subItem.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='cursor-pointer h-[30px] items-center select-none border px-[17px] text-[13px] rounded-md hidden lg:flex'>
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
              {headerMenu.map((v, index) => (
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
