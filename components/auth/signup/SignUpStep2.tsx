import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType, signupStepForms } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';

interface SignUpStep2Props {
  handleCurrentStep: (stepName: string) => void;
  handleAccessStepList: (stepName: string, value: boolean) => void;
}

const SignUpStep2 = ({
  handleCurrentStep,
  handleAccessStepList,
}: SignUpStep2Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();
  const onClickNextStep = async () => {
    const validCheck = await trigger(signupStepForms.step2);
    handleAccessStepList('step3', validCheck);
    if (!validCheck) {
      return;
    }
    handleCurrentStep('step3');
  };

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

export default SignUpStep2;
