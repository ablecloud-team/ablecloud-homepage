'use client';

import { useMemo, useState } from 'react';

import { CompatibilityCatalogLabels, CompatibilityCatalogSection } from '@/types/resource';

type CompatibilityCategoryKey = string;

interface CompatibilityCatalogProps {
  categories: { key: CompatibilityCategoryKey; label: string }[];
  initialCategory?: CompatibilityCategoryKey;
  labels: CompatibilityCatalogLabels;
  sections: CompatibilityCatalogSection[];
}

const tableGridClass = 'grid grid-cols-[261.333px_261.333px_400px_277.334px]';

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
    <div className='flex justify-center animate-fade-in pt-[30px] md:pt-[48px]'>
      <div className='w-full max-w-[1200px] px-4 md:px-0'>
        <section className='grid gap-x-6 gap-y-4 border-y border-[#E5E5E5] py-4 md:grid-cols-[136px_1fr] md:grid-rows-[79px_88px] md:gap-y-0 md:py-0'>
          <div className='flex items-start justify-start md:justify-center md:pt-6'>
            <span className='inline-flex h-[39px] items-center rounded-full border border-[#D9D9D9] px-6 text-[14px] font-semibold leading-[19px] text-[#111111]'>
              {labels.category}
            </span>
          </div>

          <div className='flex flex-wrap items-start gap-[10px] md:pt-6'>
            {categories.map(category => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  type='button'
                  onClick={() => setActiveCategory(category.key)}
                  className={`h-[39px] rounded-full border px-6 text-[14px] font-semibold leading-[19px] transition ${
                    isActive
                      ? 'border-[#111111] bg-[#111111] text-white'
                      : 'border-[#D9D9D9] bg-white text-[#111111] hover:border-[#111111]'
                  }`}>
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className='flex items-start justify-start md:justify-center md:pt-4'>
            <span className='inline-flex h-[39px] items-center rounded-full border border-[#D9D9D9] px-6 text-[14px] font-semibold leading-[19px] text-[#111111]'>
              {labels.search}
            </span>
          </div>

          <form
            className='flex w-full flex-col gap-3 md:flex-row md:items-start md:pt-4'
            onSubmit={event => {
              event.preventDefault();
              setQuery(draftQuery);
            }}>
            <div className='flex h-12 flex-1 items-center border border-[#D9D9D9] bg-white px-5 md:max-w-[938px]'>
              <span className='mr-3 h-4 w-4 rounded-full border-2 border-[#BDBDBD]' aria-hidden='true' />
              <input
                value={draftQuery}
                onChange={event => setDraftQuery(event.target.value)}
                placeholder={labels.placeholder}
                className='h-full min-w-0 flex-1 bg-transparent text-[14px] font-medium leading-[19px] text-[#111111] outline-none placeholder:text-[#8B8B8B]'
              />
            </div>
            <button
              type='submit'
              className='h-12 bg-[#111111] px-6 text-[14px] font-semibold leading-4 text-white transition hover:bg-[#2A2A2A] md:w-[77px] md:px-0'>
              {labels.searchButton}
            </button>
          </form>
        </section>

        {filteredSections.length > 0 ? (
          <div className='pt-12'>
            {filteredSections.map(section => {
              const headerLabels = section.headerLabels ?? {
                name: labels.productColumn,
                image: labels.imageColumn,
                support: labels.supportColumn,
                note: labels.noteColumn,
              };

              return (
                <section key={section.key} className='mb-12 last:mb-0'>
                  <h2 className='mb-6 text-[30px] font-bold leading-[42px] text-[#111111]'>
                    {section.title}
                  </h2>

                  <div className='overflow-x-auto'>
                    <div className='min-w-[1200px] border-t border-[#111111]'>
                      <div
                        className={`${tableGridClass} h-11 border-b border-[#D9D9D9] bg-[#F7F7F7] text-[16px] font-semibold leading-7 text-[#111111]`}>
                        <div className='flex items-center px-2'>{headerLabels.name}</div>
                        <div className='flex items-center px-2'>{headerLabels.image}</div>
                        <div className='flex items-center px-2'>{headerLabels.support}</div>
                        <div className='flex items-center px-2'>{headerLabels.note}</div>
                      </div>

                      {section.rows.map(row => (
                        <div
                          key={row.id}
                          className={`${tableGridClass} min-h-32 border-b border-[#D9D9D9] bg-white`}>
                          <div className='flex items-center px-2 py-6 text-[16px] font-medium leading-7 text-[#111111]'>
                            {row.name}
                          </div>
                          <div className='flex items-center px-2 py-6'>
                            {row.imageSrc && (
                              <img
                                src={row.imageSrc}
                                alt={row.imageLabel ?? row.name}
                                className='max-h-20 max-w-[180px] object-contain'
                                loading='lazy'
                              />
                            )}
                          </div>
                          <div className='flex flex-col justify-center px-2 py-6 text-[16px] font-medium leading-7 text-[#111111]'>
                            {row.support.map((item, index) => (
                              <span key={`${row.id}-support-${index}`}>{item}</span>
                            ))}
                          </div>
                          <div className='flex flex-col justify-center px-2 py-6 text-[16px] font-medium leading-7 text-[#111111]'>
                            {row.notes?.map((item, index) => (
                              <span key={`${row.id}-note-${index}`}>{item}</span>
                            ))}
                          </div>
                        </div>
                      ))}
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
