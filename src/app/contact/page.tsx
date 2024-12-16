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
    </>
  );
}
