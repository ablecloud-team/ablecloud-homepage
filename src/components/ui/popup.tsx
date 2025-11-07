'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import Close from '@/public/icons/common/close.svg';
import noticePopupSrc from '@/public/images/home/notice-popup.jpg';

import { useRouter } from '@/i18n/routing';

interface PopupProps {
  imageSrc: string;
  alt?: string;
  storageKey?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function Popup({
  imageSrc, // 현재는 noticePopupSrc로 고정되어 사용되므로, 이 prop은 사용되지 않습니다.
  alt = 'Popup',
  storageKey = 'hasSeenWelcomePopup',
  onClose,
  showCloseButton = true,
}: PopupProps) {
  const [visible, setVisible] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const hasSeen = sessionStorage.getItem(storageKey);
    if (!hasSeen) {
      setVisible(true);
    }
  }, [storageKey]);

  const handleClose = () => {
    setVisible(false);
    // 세션 스토리지에 저장 - 탭을 닫으면 자동으로 사라짐
    sessionStorage.setItem(storageKey, 'true');
    onClose?.();
  };

  // Function to reset popup state (for testing/admin purposes)
  const resetPopup = () => {
    sessionStorage.removeItem(storageKey);
    setVisible(true);
  };

  // Listen for Ctrl+Shift+R to reset popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        resetPopup();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const onClick = () => {
    navigate.push('/resource/blog/33');
  };

  if (!visible) return null;

  return (
    <div
      className='fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center z-50'
      onClick={handleOverlayClick}>
      {/* 팝업 컨테이너를 relative로 만들고, close 버튼을 이 컨테이너 기준으로 absolute로 배치 */}
      <div className='relative'>
        {showCloseButton && (
          <button
            onClick={handleClose}
            // right-[-1.5rem]와 top-[-1.5rem]으로 팝업 이미지 밖 오른쪽 위에 배치
            // 필요에 따라 `right-2`, `top-2` 등으로 이미지 위에 배치 가능
            className='absolute -top-4 -right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1 shadow-md'>
            <Close className='w-6 h-6' />
          </button>
        )}
        <Image
          src={noticePopupSrc}
          alt={alt}
          onClick={onClick}
          className='rounded-xl shadow-2xl border border-gray-200 max-w-full h-auto hover:cursor-pointer'
          priority
        />
      </div>
    </div>
  );
}
