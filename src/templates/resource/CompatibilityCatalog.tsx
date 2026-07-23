'use client';

import { HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';

import { CompatibilityCatalogLabels, CompatibilityCatalogSection } from '@/types/resource';

type CompatibilityCategoryKey = string;

interface CompatibilityCatalogProps {
  categories: { key: CompatibilityCategoryKey; label: string }[];
  initialCategory?: CompatibilityCategoryKey;
  labels: CompatibilityCatalogLabels;
  sections: CompatibilityCatalogSection[];
}

const tableGridClass = 'grid grid-cols-3 md:grid-cols-[261.333px_261.333px_400px_277.334px]';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

function ScrollReveal({ children, className = '', delay = 0, ...props }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } transition-[opacity,transform] duration-500 ease-out`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}>
      {children}
    </div>
  );
}

export function CompatibilityCatalog({
  categories,
  initialCategory = 'all',
  labels,
  sections,
}: CompatibilityCatalogProps) {
  const [draftQuery, setDraftQuery] = useState('');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CompatibilityCategoryKey>(initialCategory);

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sections
      .filter(section => activeCategory === 'all' || section.key === activeCategory)
      .map(section => ({
        ...section,
        rows: section.rows.filter(row => {
          if (!normalizedQuery) return true;

          return [
            section.title,
            section.categoryLabel,
            row.name,
            row.imageLabel ?? '',
            ...row.support,
            ...(row.notes ?? []),
          ]
            .join(' ')
            .toLowerCase()
            .includes(normalizedQuery);
        }),
      }))
      .filter(section => section.rows.length > 0);
  }, [activeCategory, query, sections]);

  return (
    <div className='compatibility-catalog flex justify-center animate-fade-in pt-[30px]'>
      <div className='w-full max-w-[1200px] px-4 md:px-0'>
        <section className='grid w-full min-w-0 max-w-full gap-x-6 gap-y-2 md:overflow-hidden md:rounded-[20px] md:border md:border-[#E0E5E6] md:grid-cols-[136px_1fr] md:grid-rows-[79px_88px] md:gap-y-0'>
          <div className='hidden items-start justify-start bg-[#F6F7F8] md:flex md:justify-center md:pt-6'>
            <span className='inline-flex h-[39px] items-center px-6 text-[16px] font-bold leading-[19px] tracking-[-0.05em] text-[#202020]'>
              {labels.category}
            </span>
          </div>

          <div className='flex h-[69px] min-w-0 snap-x snap-mandatory items-start gap-[10px] overflow-x-auto scroll-smooth pt-4 scrollbar-hide md:h-auto md:pt-6'>
            {categories.map(category => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  type='button'
                  onClick={() => setActiveCategory(category.key)}
                  className={`h-[37px] shrink-0 snap-start rounded-full border px-[10px] text-[14px] font-semibold leading-[17px] tracking-[-0.05em] transition md:h-[39px] md:text-[15px] md:leading-[19px] ${
                    category.key === 'server' ? 'w-11 px-0 md:w-10' : 'md:px-4'
                  } ${
                    isActive
                      ? 'border-[#202020] bg-white text-[#444444]'
                      : 'border-transparent bg-white text-[#444444] hover:border-[#202020]'
                  }`}>
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className='hidden items-start justify-start bg-[#F6F7F8] md:flex md:justify-center md:pt-4'>
            <span className='inline-flex h-[39px] items-center px-6 text-[16px] font-bold leading-[19px] tracking-[-0.05em] text-[#202020]'>
              {labels.search}
            </span>
          </div>

          <form
            className='grid h-[72px] w-full min-w-0 max-w-[calc(100vw-64px)] grid-cols-[minmax(0,1fr)_57px] items-start gap-3 pt-2 md:max-w-none md:flex md:h-auto md:gap-0 md:pt-4'
            onSubmit={event => {
              event.preventDefault();
              setQuery(draftQuery);
            }}>
            <div className='flex h-12 min-w-0 flex-1 items-center rounded-[10px] border border-[#EEEEEE] bg-white px-5 md:max-w-[938px]'>
              <span className='mr-3 h-4 w-4 rounded-full border-2 border-[#BDBDBD]' aria-hidden='true' />
              <input
                value={draftQuery}
                onChange={event => setDraftQuery(event.target.value)}
                placeholder={labels.placeholder}
                className='h-full min-w-0 flex-1 bg-transparent text-[16px] font-normal leading-[19px] text-[#202020] outline-none placeholder:text-[#758185]'
              />
            </div>
            <button
              type='submit'
              className='h-12 w-[57px] min-w-[57px] rounded-[10px] bg-[#202020] px-0 text-[14px] font-semibold leading-4 text-white transition hover:bg-[#2A2A2A] md:w-[77px] md:min-w-[77px] md:text-[16px]'>
              {labels.searchButton}
            </button>
          </form>
        </section>

        {filteredSections.length > 0 ? (
          <div className='pt-6 md:pt-12'>
            {filteredSections.map(section => {
              const headerLabels = section.headerLabels ?? {
                name: labels.productColumn,
                image: labels.imageColumn,
                support: labels.supportColumn,
                note: labels.noteColumn,
              };

              return (
                <section key={section.key} className='mb-6 md:mb-12 last:mb-0'>
                  <ScrollReveal className='mb-6'>
                    <h2 className='text-[20px] font-bold leading-6 text-[#202020] md:text-[30px] md:leading-[42px]'>
                      {section.title}
                    </h2>
                  </ScrollReveal>

                  <div className='overflow-visible md:overflow-x-auto md:overflow-y-hidden'>
                    <div className='min-w-0 border-t border-[#111111] md:min-w-[1200px]'>
                      <div
                        className={`${tableGridClass} h-11 border-b border-[#D9D9D9] bg-[#F6F7F8] text-[14px] font-semibold leading-7 text-[#202020] md:text-[16px]`}>
                        <div className='flex items-center px-2'>{headerLabels.name}</div>
                        <div className='hidden items-center px-2 md:flex'>{headerLabels.image}</div>
                        <div className='flex items-center px-2'>{headerLabels.support}</div>
                        <div className='flex items-center px-2'>{headerLabels.note}</div>
                      </div>

                      {section.rows.map((row, index) => {
                        const isDp5200 = row.id === 'backup-synology-dp5200';

                        return (
                          <ScrollReveal
                            key={row.id}
                            delay={(index % 4) * 45}
                            className={`${tableGridClass} min-h-0 border-b border-[#D9D9D9] md:min-h-32 ${
                              index % 2 === 0 ? 'bg-white' : 'bg-[#F6F7F8]'
                            }`}>
                            <div className='flex items-center px-2 py-4 text-[14px] font-medium leading-5 text-[#202020] md:py-6 md:text-[18px] md:leading-7'>
                              {row.name}
                            </div>
                            <div
                              className={`hidden items-center px-2 md:flex ${
                                isDp5200 ? 'overflow-hidden py-3' : 'py-6'
                              }`}>
                              {row.imageSrc && (
                                <img
                                  src={row.imageSrc}
                                  alt={row.imageLabel ?? row.name}
                                  className={
                                    isDp5200
                                      ? 'h-40 w-40 -translate-y-[29px] object-contain'
                                      : 'max-h-20 max-w-[180px] object-contain'
                                  }
                                  loading='lazy'
                                />
                              )}
                            </div>
                            <div className='flex flex-col justify-center px-2 py-4 text-[14px] font-medium leading-5 text-[#202020] md:py-6 md:text-[16px] md:leading-7'>
                              {row.support.length > 0 && (
                                <ul className='space-y-1 md:list-disc md:space-y-0 md:pl-6'>
                                  {row.support.map((item, index) => (
                                    <li key={`${row.id}-support-${index}`}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                            <div className='flex flex-col justify-center px-2 py-4 text-[14px] font-medium leading-5 text-[#202020] md:py-6 md:text-[16px] md:leading-7'>
                              {row.notes && row.notes.length > 0 && (
                                <ul className='space-y-1 md:list-disc md:space-y-0 md:pl-6'>
                                  {row.notes.map((item, index) => (
                                    <li key={`${row.id}-note-${index}`}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </ScrollReveal>
                        );
                      })}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className='mt-12 border border-dashed border-[#D9D9D9] bg-white px-6 py-16 text-center'>
            <div className='text-[22px] font-bold text-[#111111]'>{labels.noResultsTitle}</div>
            <div className='mt-2 text-[15px] text-[#666666]'>{labels.noResultsDescription}</div>
          </div>
        )}
      </div>
    </div>
  );
}
