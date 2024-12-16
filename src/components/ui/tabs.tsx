'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useEffect, useRef, useState } from 'react';

interface TabsProps {
  tabs: { text: string; href: string }[];
}

export function Tabs({ tabs }: TabsProps) {
  const pathname = usePathname();

  const activeIndex = tabs.findIndex(tab => tab.href === pathname);

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [bgStyle, setBgStyle] = useState<{ width: string; left: string } | undefined>(undefined);

  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (activeIndex !== -1 && activeTab) {
      const container = activeTab.parentElement?.parentElement;

      if (container) {
        const rect = activeTab.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setBgStyle({
          width: `${rect.width + 48}px`,
          left: `${rect.left - containerRect.left - 24}px`,
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className='flex justify-center'>
      <div className='p-2 bg-[#F6F7F8] rounded-full'>
        <div className='relative flex'>
          <div
            className={`absolute top-0 h-full bg-[#202020] transition-all rounded-full duration-300 shadow-md`}
            style={bgStyle}
          />
          {tabs.map((tab, idx) => (
            <Link
              key={idx}
              href={tab.href}
              className={`px-6 rounded-full ${!bgStyle && activeIndex === idx ? 'bg-[#202020]' : ''}`}>
              <div
                ref={el => (tabRefs.current[idx] = el)}
                className={`relative py-[10px] text-sm text-center transition-all duration-200 z-10 ${
                  activeIndex === idx ? 'font-bold text-white' : 'font-normal text-[#787878]'
                }`}>
                {tab.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
