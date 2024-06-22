/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType, signupStepForms } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';
import Spinner from '@/components/common/Spinner';
import useAuthStore from '@/store/useAuthStore';
import CertificationEmail from './CertificationEmail';
import useGetCheckValidEmail from '@/hooks/react-query/auth/useGetCheckValidEmail';
import useGetSendEmailCertification from '@/hooks/react-query/auth/useGetSendEmailCertification';
import { IconCheck } from '@/components/icons';

interface SignUpStep1Props {
  handleCurrentStep: (stepName: string) => void;
  handleAccessStepList: (stepName: string, value: boolean) => void;
}

const SignUpStep1 = ({
  handleCurrentStep,
  handleAccessStepList,
}: SignUpStep1Props) => {
  const {
    duplicateCheckedEmail,
    setDuplicateCheckedEmail,
    resetDuplicateCheckedEmail,
  } = useAuthStore();
  const {
    getValues,
    register,
    trigger,
    setError,
    setFocus,
    clearErrors,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();

  const [isOpenCertificationEmail, setIsOpenCertificationEmail] =
    useState(false);

  const {
    isLoading: getCheckValidEmailIsLoading,
    refetch: getCheckValidEmailRefetch,
  } = useGetCheckValidEmail({
    email: getValues('email'),
  });
  const { refetch: getSendEmailCertificationRefetch } =
    useGetSendEmailCertification({
      email: getValues('email'),
    });

  const validCheck = async () => {
    // 파라미터로넘기는 특정 파트([키,키 ...] 형식) 폼검사 통과시 true, 실패시 false
    return trigger(signupStepForms.step1);
  };
  const resetCertification = () => {
    setIsOpenCertificationEmail(false);
    resetDuplicateCheckedEmail();
    handleAccessStepList('step2', false);
    setFocus('email');
  };

  const onClickCheckEmail = async () => {
    if (getCheckValidEmailIsLoading) return;
    if (!(await validCheck())) {
      setError('email', {
        type: 'required',
        message: '이메일을 확인해주세요.',
      });
      resetCertification();
      return;
    }
    if (await fetchCheckEmail()) {
      await fetchSendEmail();
    }
  };

  const onClickNextStep = async () => {
    if (
      !duplicateCheckedEmail ||
      duplicateCheckedEmail !== getValues('email')
    ) {
      setError('email', { message: '이메일 중복확인을 해주세요.' });
      setFocus('email');
      return;
    }
    const valid = await validCheck();
    handleAccessStepList('step2', valid);
    if (valid) {
      handleCurrentStep('step2');
    }
  };

  const onSuccessCertification = () => {
    clearErrors('email');
    resetCertification();
    setDuplicateCheckedEmail(getValues('email'));
  };

  const fetchCheckEmail = async () => {
    const checkEmailresult = await getCheckValidEmailRefetch();
    if (checkEmailresult.data?.body === false) {
      setError('email', {
        type: 'duplicate',
        message: '이미 가입된 이메일입니다.',
      });
    }

    return checkEmailresult.data?.body;
  };
  const fetchSendEmail = async () => {
    const sendEmailResult = await getSendEmailCertificationRefetch();
    if (sendEmailResult.data?.body) {
      clearErrors('email');
      setIsOpenCertificationEmail(true);
    }
  };

  return (
    <>
      <div className="flex">
        <InputWithLabel
          labelText="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          addInputClassName="pr-[80px]"
          id="email"
          register={register('email', {
            required: true,
          })}
          isReadOnly={
            isOpenCertificationEmail || duplicateCheckedEmail ? true : false
          }
        >
          {isOpenCertificationEmail || duplicateCheckedEmail ? (
            <button
              onClick={resetCertification}
              className="absolute right-2 top-1/2 flex -translate-y-1/2 transform justify-center rounded-full bg-gray-300 px-2 font-semibold text-white hover:opacity-75"
            >
              X
            </button>
          ) : (
            <button
              onClick={onClickCheckEmail}
              type="button"
              className="absolute right-2 top-1/2 flex w-20 -translate-y-1/2 transform justify-center rounded-lg border bg-primary py-2 font-semibold text-white hover:opacity-75 focus:opacity-75"
            >
              {getCheckValidEmailIsLoading ? (
                <Spinner color="#fff" size="25px" />
              ) : (
                '중복확인'
              )}
            </button>
          )}
        </InputWithLabel>
      </div>
      {isOpenCertificationEmail && (
        <CertificationEmail onSuccessCertification={onSuccessCertification} />
      )}
      {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
      {duplicateCheckedEmail === getValues('email') && !errors.email && (
        <p className="mt-1 flex items-center text-primary-medium">
          <span className="mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-medium">
            <IconCheck className="fill-white stroke-white" />
          </span>
          인증완료
        </p>
      )}
      <button
        type="button"
        onClick={onClickNextStep}
        className="mt-6 block w-full rounded-lg border bg-primary px-4 py-3 font-semibold text-white hover:opacity-75 focus:bg-opacity-75"
      >
        다음
      </button>
    </>
  );
};

export default SignUpStep1;
