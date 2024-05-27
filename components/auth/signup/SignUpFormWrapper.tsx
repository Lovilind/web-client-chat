/* eslint-disable import/no-extraneous-dependencies */
'use client';
import { useCallback, useMemo, useState } from 'react';
import { signUpRegisterSchema } from '@/constants/Schema';
import FormContainer from '@/components/common/FormContainer';
import Step from '@/components/common/Step';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';

export interface SignUpFormDataType {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  gender: string;
  birth: string;
  phone: string;
  university: string;
}

const SignUpFormWrapper = () => {
  const stepList = useMemo(() => ['step1', 'step2', 'step3'], []);

  const [currentStep, setCurrentStep] = useState<string>(stepList[0]);
  const [accessStepList, setAccessStepList] = useState<string[]>([stepList[0]]);

  const handleCurrentStep = useCallback((stepName: string) => {
    setCurrentStep(stepName);
  }, []);

  const handleAccessStepList = (stepName: string, value: boolean) => {
    if (!accessStepList.includes(stepName) && value) {
      setAccessStepList([...accessStepList, stepName]);
      return;
    }
    if (!value) {
      setAccessStepList(accessStepList.filter((step) => step !== stepName));
    }
  };

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
          isAllAccessStep={false}
          accessStepList={accessStepList}
        />
      </div>

      <FormContainer
        onSubmit={submitForm}
        formSchema={signUpRegisterSchema}
        defaultValues={{
          email: '',
          password: '',
          passwordCheck: '',
          university: '',
          nickname: '',
          gender: '',
          birth: '',
          // birth: '2024-01-01',
          phone: '',
        }}
      >
        {currentStep === 'step1' && (
          <SignUpStep1
            handleCurrentStep={handleCurrentStep}
            handleAccessStepList={handleAccessStepList}
          />
        )}
        {currentStep === 'step2' && (
          <SignUpStep2
            handleCurrentStep={handleCurrentStep}
            handleAccessStepList={handleAccessStepList}
          />
        )}
        {currentStep === 'step3' && <SignUpStep3 />}
        {currentStep === 'step3' && (
          <button
            type="submit"
            className="mt-6 block w-full rounded-lg border bg-[#38CCDD] px-4 py-3 font-semibold text-white hover:border-[#38CCDD] hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-500"
          >
            회원가입
          </button>
        )}
      </FormContainer>
    </div>
  );
};

export default SignUpFormWrapper;
