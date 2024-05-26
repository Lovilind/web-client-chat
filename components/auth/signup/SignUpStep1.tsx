/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';
import Spinner from '@/components/common/Spinner';
import axiosInstance from '@/utils/axiosInstance';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
    getValues,
    register,
    trigger,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();
  const { mutate, isPending } = useMutation<any, AxiosError, { email: string }>(
    {
      mutationFn: (email) => fetchCheckEmail(email),
      onSuccess: (data) => {
        // 요청 성공 시의 처리
        console.log('요청 성공', data);
        clearErrors('email');
      },
      onError: (error) => {
        // 에러 처리
        console.error('에러 발생', error);
        if (error.response?.status === 409) {
          setError('email', {
            type: 'duplicated',
            message: '이미 사용중인 이메일입니다.',
          });
        }
      },
      onSettled: () => {
        // 성공/실패와 관계없이 실행될 로직
        console.log('요청 완료');
      },
    },
  );
  const onClickCheckEmail = () => {
    if (!getValues('email')) {
      setError('email', {
        type: 'required',
        message: '이메일을 입력해주세요.',
      });
      return;
    }
    mutate({ email: getValues('email') });
  };

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
      <div className="flex">
        <InputWithLabel
          labeText="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          addInputClassName="pr-[80px]"
          id="email"
          register={register('email', {
            required: true,
          })}
          errorMsg={errors.email?.message}
        >
          <button
            onClick={onClickCheckEmail}
            type="button"
            className="bg-primary absolute right-2 top-1/2 flex w-16 -translate-y-1/2 transform justify-center rounded-lg border py-2 font-semibold text-white hover:opacity-75 focus:opacity-75"
          >
            {isPending ? <Spinner color="#fff" size="25px" /> : '인증'}
          </button>
        </InputWithLabel>
      </div>
      <button
        type="button"
        onClick={onClickNextStep}
        className="bg-primary mt-6 block w-full rounded-lg border px-4 py-3 font-semibold text-white hover:opacity-75 focus:bg-opacity-75"
      >
        다음
      </button>
    </>
  );
};

export default SignUpStep1;
