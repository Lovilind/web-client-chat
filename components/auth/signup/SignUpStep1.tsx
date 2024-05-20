import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';

interface SignUpStep1Props {
  handleCurrentStep: (stepName: string) => void;
  handleAccessStepList: (stepName: string, value: boolean) => void;
}

const SignUpStep1 = ({
  handleCurrentStep,
  handleAccessStepList,
}: SignUpStep1Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();
  const onClickNextStep = async () => {
    const validCheck = await trigger(['email']);
    handleAccessStepList('step2', validCheck);
    if (!validCheck) {
      return;
    }
    handleCurrentStep('step2');
  };
  return (
    <>
      <div>
        <InputWithLabel
          labeText="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          id="email"
          register={register('email', {
            required: true,
          })}
          errorMsg={errors.email?.message}
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
