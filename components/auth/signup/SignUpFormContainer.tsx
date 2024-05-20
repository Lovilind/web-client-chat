/* eslint-disable import/no-extraneous-dependencies */
'use client';
import React, { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpRegisterSchema } from '@/constants/Schema';
import Step from '@/components/common/Step';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';

export interface SignUpFormDataType {
  email: string;
  password: string;
  passwordCheck: string;
  universityName: string;
}

const SignUpFormContainer = () => {
  const {
    handleSubmit,
    // getValues,
    register,
    trigger, //다른버튼에서 검증할수있는듯
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
      universityName: '',
    },
  });
  const stepList = useMemo(() => ['step1', 'step2'], []);
  const [currentStep, setCurrentStep] = React.useState<string>(stepList[0]);

  const handleCurrentStep = useCallback((stepName: string) => {
    setCurrentStep(stepName);
    clearErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitForm = (data: SignUpFormDataType) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-[50%]">
        <Step
          currentStep={currentStep}
          stepList={stepList}
          handleCurrentStep={handleCurrentStep}
        />
      </div>

      <form onSubmit={handleSubmit(submitForm)}>
        {currentStep === 'step1' && (
          <SignUpStep1
            register={register}
            errors={errors}
            handleCurrentStep={handleCurrentStep}
            // getValues={getValues}
            trigger={trigger}
          />
        )}
        {currentStep === 'step2' && (
          <SignUpStep2 register={register} errors={errors} />
        )}
        {currentStep === 'step2' && (
          <button
            type="submit"
            className="mt-6 block w-full rounded-lg border bg-[#38CCDD] px-4 py-3 font-semibold text-white hover:border-[#38CCDD] hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-500"
          >
            회원가입
          </button>
        )}
      </form>
    </div>
  );
};

export default SignUpFormContainer;
