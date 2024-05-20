import React from 'react';
import Input from '../Input';
import {
  FieldErrors,
  // UseFormGetValues,
  UseFormRegister,
  UseFormTrigger,
} from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormContainer';

interface SignUpStep1Props {
  register: UseFormRegister<SignUpFormDataType>;
  errors: FieldErrors<SignUpFormDataType>;
  handleCurrentStep: (stepName: string) => void;
  // getValues: UseFormGetValues<SignUpFormDataType>;
  trigger: UseFormTrigger<SignUpFormDataType>;
}

const SignUpStep1 = ({
  register,
  errors,
  handleCurrentStep,
  // getValues,
  trigger,
}: SignUpStep1Props) => {
  const onClickNextStep = async () => {
    const emailVal = await trigger('email' && 'password' && 'passwordCheck');
    if (!emailVal) {
      return;
    }
    handleCurrentStep('step2');
  };
  return (
    <>
      <div>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요."
          id="email"
          register={register('email', {
            required: true,
          })}
          // errorMsg={errors.email?.message}
          errorMsg={errors.email?.message as string}
        />
      </div>
      <div>
        <Input
          type={'text'}
          placeholder="비밀번호를 입력해주세요."
          id="password"
          register={register('password', {
            required: true,
          })}
          errorMsg={errors.password?.message as string}
        />
      </div>
      <div>
        <Input
          type={'text'}
          placeholder="비밀번호를 입력해주세요."
          id="passwordCheck"
          register={register('passwordCheck', {
            required: true,
          })}
          errorMsg={errors.passwordCheck?.message as string}
        />
      </div>
      <button
        type="button"
        onClick={onClickNextStep}
        className="mt-6 block w-full rounded-lg border bg-[#38CCDD] px-4 py-3 font-semibold text-white hover:border-[#38CCDD] hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-500"
      >
        다음
      </button>
    </>
  );
};

export default SignUpStep1;
