import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';
import ModalWrapper from '@/components/common/ModalWrapper';

const SignUpStep3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();
  const [isShowModal, setIsShowModal] = useState(false);
  const onCloseModal = () => {
    setIsShowModal((prev) => !prev);
  };
  return (
    <>
      <div>
        <InputWithLabel
          labeText="학교명"
          type="text"
          placeholder="학교명을 입력해주세요."
          id="universityName"
          register={register('universityName', {
            required: true,
          })}
          errorMsg={errors.universityName?.message}
          isReadOnly={true}
        >
          <span
            onClick={onCloseModal}
            className="absolute right-5 top-1/2 -translate-y-1/2 transform cursor-pointer text-sm text-gray-400 hover:text-[#38CCDD]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </InputWithLabel>
        {isShowModal && (
          <ModalWrapper
            width="w-[700px]"
            onCloseModal={onCloseModal}
            isCloseButtonVisible={true}
          >
            <div>학교찾는모달</div>
          </ModalWrapper>
        )}
      </div>
    </>
  );
};

export default SignUpStep3;
