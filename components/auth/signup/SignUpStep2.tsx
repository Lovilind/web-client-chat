import React from 'react';
import Input from '../Input';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormContainer';

interface SignUpStep2Props {
  register: UseFormRegister<SignUpFormDataType>;
  errors: FieldErrors<SignUpFormDataType>;
}

const SignUpStep2 = ({ register, errors }: SignUpStep2Props) => {
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
          errorMsg={errors.universityName?.message as string}
        />
      </div>
    </>
  );
};

export default SignUpStep2;
