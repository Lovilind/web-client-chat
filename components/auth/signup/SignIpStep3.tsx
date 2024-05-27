import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';
import ModalWrapper from '@/components/common/ModalWrapper';
import RadioBox from '@/components/common/RadioBox';

const genderRadioList = [
  { id: 'gender', value: 'male', labelText: '남자' },
  { id: 'gender', value: 'female', labelText: '여자' },
];

const SignUpStep3 = () => {
  const {
    register,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();
  const [isShowModal, setIsShowModal] = useState(false);
  const onCloseModal = () => {
    setIsShowModal((prev) => !prev);
  };

  const phoneValue = watch('phone', '');
  const onChangePhoneInput = () => {
    const cleanPhoneValue = phoneValue.replace(/[^0-9]/g, '');
    if (cleanPhoneValue !== phoneValue) {
      setValue('phone', cleanPhoneValue);
    }
  };

  return (
    <>
      <div>
        <InputWithLabel
          labeText="닉네임"
          type="text"
          placeholder="닉네임을 입력해주세요."
          id="nickname"
          register={register('nickname', {
            required: true,
          })}
          errorMsg={errors.nickname?.message}
        ></InputWithLabel>
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
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="mb-2 block text-gray-500">성별</div>
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2">
                <RadioBox
                  register={register('gender', {
                    required: true,
                  })}
                  radioList={genderRadioList}
                  // isDisabled={true}
                />
              </div>
              {errors.gender?.message && (
                <p className="text-red-600">{errors.gender?.message}</p>
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-2 block text-gray-500">생년월일</div>
            <span>
              <input
                id="birth"
                type="date"
                max={new Date().toISOString().split('T')[0]}
                {...register('birth', {
                  required: true,
                })}
              />
            </span>
            {errors.birth?.message && (
              <p className="text-red-600">{errors.birth?.message}</p>
            )}
          </div>
        </div>
        <InputWithLabel
          labeText="핸드폰"
          type="text"
          placeholder="번호를 숫자만 입력해주세요."
          id="phone"
          register={register('phone', {
            required: true,
            onChange: onChangePhoneInput,
          })}
          maxLength={11}
          errorMsg={errors.phone?.message}
        ></InputWithLabel>

        <button onClick={() => console.log(getValues())}>123</button>
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
