'use client';

import useUserStore from '@/store/useUserStore';
import CustomTooltip from '../common/Tooltip';
import Link from 'next/link';
import { useState } from 'react';
import ModalWrapper from '../common/ModalWrapper';

const AfterLoginTooltipContent = () => {
  return (
    <div className="flex flex-col gap-3 px-5 py-4">
      <p className="text-gray-500">로그인 후 이용 가능합니다.</p>
      <Link
        href={'/signin'}
        className="rounded-lg border bg-[#38CCDD] px-4 py-3 text-white"
      >
        로그인
      </Link>
    </div>
  );
};

const ChatCreateButton = () => {
  const { isLogin } = useUserStore();

  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);

  const handleIsOpenCreateModal = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  return (
    <div className="my-8 text-center">
      <CustomTooltip
        tooltipContent={<AfterLoginTooltipContent />}
        tooltipContentClassName={
          'transition-opacity duration-1000 ease-in-out w-[150%]'
        }
        tooltipSide={'bottom'}
        isShowTooltipByClick={true}
        isNoShowTooltip={isLogin}
      >
        <button
          onClick={handleIsOpenCreateModal}
          disabled={!isLogin}
          className={`block w-full rounded-lg border px-4 py-3 font-semibold text-white ${isLogin ? 'bg-[#38CCDD]  hover:border-[#38CCDD] hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-500' : 'cursor-not-allowed bg-gray-300'}`}
        >
          채팅방 생성
        </button>
      </CustomTooltip>
      {isOpenCreateModal && (
        <ModalWrapper onCloseModal={handleIsOpenCreateModal}>생성</ModalWrapper>
      )}
    </div>
  );
};

export default ChatCreateButton;
