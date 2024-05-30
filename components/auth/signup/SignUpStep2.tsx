import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';

interface SignUpStep2Props {
  handleCurrentStep: (stepName: string) => void;
  handleAccessStepList: (stepName: string, value: boolean) => void;
}

const SignUpStep2 = ({}: SignUpStep2Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();

  return (
    <>
      <div>
        <InputWithLabel
          labelText="비밀번호"
          type={'password'}
          placeholder="비밀번호를 입력해주세요."
          id="password"
          register={register('password', {
            required: true,
          })}
          errorMsg={errors.password?.message}
        />
      </div>
      <div className="mt-1">
        <InputWithLabel
          labelText="비밀번호 확인"
          type={'password'}
          placeholder="비밀번호를 입력해주세요."
          id="passwordCheck"
          register={register('passwordCheck', {
            required: true,
          })}
          errorMsg={errors.passwordCheck?.message}
        />
      </div>
    </>
  );
};

export default SignUpStep2;
