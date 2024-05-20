import React from 'react';
import Input from '../Input';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';

const SignUpStep2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();
  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="학교명을 입력해주세요."
          id="universityName"
          register={register('universityName', {
            required: true,
          })}
          errorMsg={errors.universityName?.message}
        />
      </div>
    </>
  );
};

export default SignUpStep2;
