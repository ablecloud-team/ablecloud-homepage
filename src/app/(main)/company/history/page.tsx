import { companyHistory } from '@/constants/company';

export default function CompanyHistory() {
  return (
    <div className='flex justify-center animate-fade-in w-full'>
      <div className='flex flex-col gap-8 md:gap-12 max-w-[470px] py-10 md:py-[60px]'>
        {companyHistory.map(v => (
          <div className='flex flex-col md:flex-row gap-5 md:gap-9' key={v.year}>
            <div className='text-[#2582AD] font-bold text-[24px] md:text-[28px]'>{v.year}</div>
            <div className='flex flex-col gap-3 leading-[17px]'>
              {v.history.map((h, i) => (
                <div key={i} className={`${h.isHighlight ? 'text-[#2582AD]' : 'text-[#444]'}`}>
                  {h.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
