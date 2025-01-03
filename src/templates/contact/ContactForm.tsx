'use client';

import Image from 'next/image';

import { Button } from '@/components/ui';

import CheckSrc from '@/public/images/contact/check.png';

import { ValidationError, useForm } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm('mzzbldwk');

  if (state.succeeded) {
    return (
      <div className='flex flex-col items-center gap-6 text-center'>
        <Image src={CheckSrc} alt='' />
        <div className='font-bold text-[24px] lg:text-[32px]'>
          고객님의 문의사항 제출이 완료되었습니다.
        </div>
        <div className='font-medium'>
          고객님의 소중한 문의사항을 검토 후 연락드리겠습니다.
          <br />
          궁금하신 사항은 아래 메일로 추가 문의하실 수 있습니다.
        </div>
        <div className='font-medium text-[18px] lg:text-[20px] break-all'>
          sales@ablestack.co.kr
        </div>
        <Button buttonData={{ text: '홈으로', href: '/', className: 'mt-[48px]' }} />
      </div>
    );
  }

  return (
    <div className='flex justify-center'>
      <form
        onSubmit={handleSubmit}
        className='max-w-[616px] w-full flex flex-col items-center gap-4'>
        <div className='flex gap-4 w-full flex-col md:flex-row'>
          <div className='flex-1'>
            <div className='font-medium mb-[10px]'>
              이름<span className='text-[#8F00FF]'>*</span>
            </div>
            <input
              type='text'
              className='w-full border border-[#EEEEEE] px-3 h-[40px] rounded-[10px]'
              id='name'
              name='name'
              required
            />
          </div>
          <div className='flex-1'>
            <div className='font-medium mb-[10px]'>
              업체명<span className='text-[#8F00FF]'>*</span>
            </div>
            <input
              type='text'
              className='w-full border border-[#EEEEEE] px-3 h-[40px] rounded-[10px]'
              id='companyName'
              name='companyName'
              required
            />
          </div>
        </div>
        <div className='flex gap-4 w-full flex-col md:flex-row'>
          <div className='flex-1'>
            <div className='font-medium mb-[10px]'>
              직함<span className='text-[#8F00FF]'>*</span>
            </div>
            <input
              type='text'
              className='w-full border border-[#EEEEEE] px-3 h-[40px] rounded-[10px]'
              id='title'
              name='title'
              required
            />
          </div>
          <div className='flex-1'>
            <div className='font-medium mb-[10px]'>
              이메일<span className='text-[#8F00FF]'>*</span>
            </div>
            <input
              type='email'
              className='w-full border border-[#EEEEEE] px-3 h-[40px] rounded-[10px]'
              id='email'
              name='email'
              required
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
              className='text-red-500'
            />
          </div>
        </div>
        <div className='flex gap-4 w-full flex-col md:flex-row'>
          <div className='flex-1'>
            <div className='font-medium mb-[10px]'>
              연락처<span className='text-[#8F00FF]'>*</span>
            </div>
            <input
              type='tel'
              className='w-full border border-[#EEEEEE] px-3 h-[40px] rounded-[10px]'
              id='tel'
              name='tel'
              required
            />
          </div>
          <div className='flex-1'>
            <div className='font-medium mb-[10px]'>
              문의유형<span className='text-[#8F00FF]'>*</span>
            </div>
            <select
              id='contactType'
              name='contactType'
              required
              className='w-full border border-[#EEEEEE] px-3 h-[40px] rounded-[10px]'>
              <option value='영업'>영업</option>
              <option value='기술'>기술</option>
              <option value='견적'>견적</option>
            </select>
          </div>
        </div>
        <div className=' w-full flex-1'>
          <div className='font-medium mb-[10px]'>
            문의내용<span className='text-[#8F00FF]'>*</span>
          </div>
          <textarea
            rows={8}
            id='message'
            className='w-full border border-[#EEEEEE] px-3 py-2 rounded-[10px]'
            name='message'
            required
          />
        </div>
        <button
          type='submit'
          className='mt-2 bg-[#202020] text-white text-sm font-bold py-[14px] px-[34px] rounded-full transition duration-300 select-none cursor-pointer hover:brightness-90'>
          문의하기
        </button>
      </form>
    </div>
  );
}
