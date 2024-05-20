import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormDataType } from './SignUpFormWrapper';
import InputWithLabel from '../InputWithLabel';
import Spinner from '@/components/common/Spinner';

interface SignUpStep1Props {
  handleCurrentStep: (stepName: string) => void;
  handleAccessStepList: (stepName: string, value: boolean) => void;
}

// async function checkEmail() {
//   const response = await fetch('/todos', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const data = await response.json();
//   console.log(data);
// }

const SignUpStep1 = ({
  handleCurrentStep,
  handleAccessStepList,
}: SignUpStep1Props) => {
  // const test = await checkEmail();
  // console.log(test);

  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<SignUpFormDataType>();
  const [isPending, setIsPending] = useState(false); //TODO: api붙일때 pending이용해서 스피너처리

  const onClickSendEmail = async () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
    }, 2000);
    // TODO: api 통해서 성공하면 성공했다는 노티, 실패하면 setError통해서하면될듯
    // const response2 = await fetch('/todos', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email: 'user1@example.com' }),
    // });
    const response = await fetch('/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'user1@example.com' }),
    });

    // const data2 = await response2.json();
    const data = await response.json();
    console.log(data);
    // console.log(data2);
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
            onClick={onClickSendEmail}
            type="button"
            className="absolute right-2 top-1/2 flex w-16 -translate-y-1/2 transform justify-center rounded-lg border bg-[#38CCDD] py-2 font-semibold text-white hover:border-[#38CCDD] hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-500"
          >
            {isPending ? <Spinner color="#fff" /> : '인증'}
          </button>
        </InputWithLabel>
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
