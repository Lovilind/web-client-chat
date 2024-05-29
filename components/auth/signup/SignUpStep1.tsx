/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType, signupStepForms } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';
import Spinner from '@/components/common/Spinner';
import axiosInstance from '@/utils/axiosInstance';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import useAuthStore from '@/store/useAuthStore';
import CertificationEmail from './CertificationEmail';

interface SignUpStep1Props {
  handleCurrentStep: (stepName: string) => void;
  handleAccessStepList: (stepName: string, value: boolean) => void;
}

const fetchCheckEmail = async (email: { email: string }) => {
  const response = await axiosInstance.post('/check-email', email);
  return response;
};

const SignUpStep1 = ({
  handleCurrentStep,
  handleAccessStepList,
}: SignUpStep1Props) => {
  const {
    duplicateCheckedEmail,
    // setDuplicateCheckedEmail,
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
  const sendEmailRef = useRef('');
  const { mutate, isPending } = useMutation<any, AxiosError, { email: string }>(
    {
      mutationFn: (email) => fetchCheckEmail(email),
      onSuccess: (data) => {
        // 요청 성공 시의 처리
        if (data.status === 200) {
          clearErrors('email');
          // setDuplicateCheckedEmail(getValues('email'));
          sendEmailRef.current = getValues('email');
        }
      },
      onError: (error) => {
        // 에러 처리
        if (error.response?.status === 409) {
          setError('email', {
            type: 'duplicated',
            message: '이미 사용중인 이메일입니다.',
          });
        }
        resetDuplicateCheckedEmail();
      },
      onSettled: () => {
        // 성공/실패와 관계없이 실행될 로직
      },
    },
  );
  const onClickCheckEmail = () => {
    if (getValues('email') === duplicateCheckedEmail) {
      return;
    }
    if (!getValues('email')) {
      setError('email', {
        type: 'required',
        message: '이메일을 입력해주세요.',
      });
      return;
    }
    mutate({ email: getValues('email') });
  };
  const resetCertification = () => {
    sendEmailRef.current = '';
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
    const validCheck = await trigger(signupStepForms.step1);
    handleAccessStepList('step2', validCheck);
    if (!validCheck) {
      return;
    }
    handleCurrentStep('step2');
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
          isReadOnly={!!sendEmailRef.current}
          // errorMsg={errors.email?.message}
        >
          {sendEmailRef.current ? (
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
              {isPending ? <Spinner color="#fff" size="25px" /> : '중복확인'}
            </button>
          )}
        </InputWithLabel>
      </div>
      {sendEmailRef.current && <CertificationEmail />}
      {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
      {duplicateCheckedEmail === getValues('email') &&
        Object.keys(errors).length === 0 && (
          <p className="flex items-center text-primary">
            <span className="mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="#fff"
                stroke="#fff"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
