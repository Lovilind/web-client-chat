import React from 'react';
import Input from '../Input';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';

interface SignUpStep1Props {
  handleCurrentStep: (stepName: string) => void;
}

const SignUpStep1 = ({ handleCurrentStep }: SignUpStep1Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();
  const onClickNextStep = async () => {
    const validCheck = await trigger(['email', 'password', 'passwordCheck']);
    if (!validCheck) {
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
          errorMsg={errors.email?.message}
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
          errorMsg={errors.password?.message}
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
          errorMsg={errors.passwordCheck?.message}
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
