import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';
import RadioBox from '@/components/common/RadioBox';

const genderRadioList = [
  { id: 'gender', value: 'male', labelText: '남자' },
  { id: 'gender', value: 'female', labelText: '여자' },
];

const SignUpStep3 = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();

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
          labelText="닉네임"
          type="text"
          placeholder="닉네임을 입력해주세요."
          id="nickname"
          register={register('nickname', {
            required: true,
          })}
          errorMsg={errors.nickname?.message}
        />
        <InputWithLabel
          labelText="학교명"
          type="text"
          placeholder='학교명을 "OO대학교" 형식으로 입력해주세요.'
          id="university"
          register={register('university', {
            required: true,
          })}
          errorMsg={errors.university?.message}
        />
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
          labelText="핸드폰"
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
      </div>
    </>
  );
};

export default SignUpStep3;
