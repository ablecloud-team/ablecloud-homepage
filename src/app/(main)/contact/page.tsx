import { contactHeaderData } from '@/constants/contact';

import { ContentWrapper, MainPageHeader } from '@/templates/common';
import { ContactForm } from '@/templates/contact';

export default function Contact() {
  return (
    <>
      <MainPageHeader headerData={contactHeaderData} />
      <ContentWrapper type='contact' bgClassName='bg-[#F9F9F9]'>
        <ContactForm />
      </ContentWrapper>
      <ContentWrapper type='contact'>
        <div className='flex flex-col items-center text-center gap-4'>
          <div className='font-bold text-[22px] lg:text-[24px]'>영업/기술지원 메일</div>
          <div className='font-medium'>
            영업 / 마케팅: sales@ablestack.co.kr
            <br />
            기술지원: support@ablecloud.io
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
