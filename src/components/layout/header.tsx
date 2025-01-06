'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useEffect, useMemo, useState } from 'react';

import { headerMenu, pageHeaderHeight, withoutHeaderPage } from '@/constants/common';

import Ablestack from '@/public/icons/common/ablestack.svg';
import Close from '@/public/icons/common/close.svg';
import Hamburger from '@/public/icons/common/hamburger.svg';

export function Header() {
  const pathname = usePathname();

  const [scrollPosition, setScrollPosition] = useState<'top' | 'middle' | 'bottom'>('top');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isWithoutHeaderPage = withoutHeaderPage.findIndex(v => pathname.startsWith(v)) > -1;

  const headerHeight = useMemo(() => {
    if (
      pathname.startsWith('/resource') ||
      pathname.startsWith('/contact') ||
      pathname.startsWith('/company')
    )
      return pageHeaderHeight.small;
    if (pathname.startsWith('/interview')) return pageHeaderHeight.smallMedium;
    if (pathname.startsWith('/products/service/')) return pageHeaderHeight.productService;

    return pageHeaderHeight.common;
  }, [pathname]);

  const bgStyle = useMemo(() => {
    if (isWithoutHeaderPage) return 'md:bg-white md:text-black';

    if (scrollPosition === 'top') return 'md:bg-black md:bg-opacity-10';
    if (scrollPosition === 'middle') return 'md:bg-black md:bg-opacity-10 md:backdrop-blur-2xl';
    return 'md:bg-white md:text-black';
  }, [scrollPosition, isWithoutHeaderPage]);

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
        className={`flex max-w-[1440px] w-full items-center ${isMenuOpen ? 'justify-end' : 'justify-between'} px-[19px] h-[60px]`}>
        {!isMenuOpen && (
          <Link href={'/'} className='w-[130px] lg:w-[160px]'>
            <Ablestack />
          </Link>
        )}
        <div className='gap-10 px-[10px] font-bold hidden cursor-pointer md:flex'>
          {headerMenu.map((v, index) => (
            <div className='relative group' key={index}>
              <Link
                href={v.href}
                className={`${scrollPosition === 'bottom' || isWithoutHeaderPage ? 'hover:text-[#202020]' : 'hover:text-[#f5f5f5]'} py-2 block`}>
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
        <Link
          href={'/contact'}
          className='cursor-pointer h-[30px] items-center select-none border px-[17px] text-[13px] rounded-md hidden md:flex transition duration-300 hover:brightness-90'>
          문의하기
        </Link>
        <div
          className='cursor-pointer flex md:hidden'
          onClick={() => {
            setIsMenuOpen(prev => !prev);
          }}>
          {isMenuOpen ? <Close /> : <Hamburger />}
        </div>
      </div>

      {isMenuOpen && (
        <div className='fixed top-[60px] left-0 right-0 w-full h-[calc(100%-60px)] bg-white z-50 flex flex-col px-6 pb-6 overflow-auto'>
          <div className='flex flex-col flex-1 text-[#7B7B7B]'>
            {headerMenu.map((v, index) => (
              <Link
                href={v.href}
                key={index}
                className='font-bold py-[18px] w-full border-b border-b-[#EEEEEE]'
                onClick={() => setIsMenuOpen(false)}>
                {v.title}
              </Link>
            ))}
          </div>

          <div className='flex justify-end mb-4'>
            <Link
              href={'/contact'}
              onClick={() => setIsMenuOpen(false)}
              className='flex cursor-pointer h-[30px] text-black items-center select-none border px-[17px] text-[13px] rounded-md transition duration-300 hover:brightness-90'>
              문의하기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
