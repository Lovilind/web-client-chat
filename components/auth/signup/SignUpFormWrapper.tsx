/* eslint-disable import/no-extraneous-dependencies */
'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { signUpRegisterSchema } from '@/constants/Schema';
import FormContainer from '@/components/common/FormContainer';
import Step from '@/components/common/Step';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';

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

export const signupStepForms: {
  step1: ['email'];
  step2: ['password', 'passwordCheck'];
  step3: ['nickname', 'university', 'gender', 'birth', 'phone'];
} = {
  step1: ['email'],
  step2: ['password', 'passwordCheck'],
  step3: ['nickname', 'university', 'gender', 'birth', 'phone'],
};

const SignUpButton = ({
  handleCurrentStep,
}: {
  handleCurrentStep: (stepName: string) => void;
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  const checkErrorsInStep = (stepForm: string[]) => {
    const errorKeys = new Set(Object.keys(errors));
    return stepForm.some((item) => errorKeys.has(item));
  };

  const formValidCheck = () => {
    if (checkErrorsInStep(signupStepForms.step3)) {
      handleCurrentStep('step3');
    } else if (checkErrorsInStep(signupStepForms.step2)) {
      handleCurrentStep('step2');
    } else if (checkErrorsInStep(signupStepForms.step1)) {
      handleCurrentStep('step1');
    }
  };

  return (
    <button
      type="submit"
      onClick={formValidCheck}
      className="mt-6 block w-full rounded-lg border bg-[#38CCDD] px-4 py-3 font-semibold text-white hover:border-[#38CCDD] hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-500"
    >
      회원가입
    </button>
  );
};

const SignUpFormWrapper = () => {
  const router = useRouter();
  const { resetDuplicateCheckedEmail } = useAuthStore();

  const stepList = useMemo(() => Object.keys(signupStepForms), []);

  const [currentStep, setCurrentStep] = useState<string>(stepList[0]);
  const [accessStepList, setAccessStepList] = useState<string[]>([stepList[0]]);
  // const [accessStepList, setAccessStepList] = useState<string[]>(stepList);

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
    // TODO: 회원가입 API 호출, code값 제거필요
    alert('회원가입 완료');
    router.push('/');
  };
  useEffect(() => {
    return () => {
      resetDuplicateCheckedEmail();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <SignUpButton handleCurrentStep={handleCurrentStep} />
        )}
      </FormContainer>
    </div>
  );
};

export default SignUpFormWrapper;
