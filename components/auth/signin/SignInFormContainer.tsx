/* eslint-disable import/no-extraneous-dependencies */
'use client';
import {
  ForwardedRef,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginRegisterSchema } from '@/constants/Schema';
import Link from 'next/link';
import CheckboxWithLabel from '../CheckboxWithLabel';
import { useRouter } from 'next/navigation';
import usePostLogin from '@/hooks/react-query/auth/usePostLogin';
import { PostLoginPayload } from '@/controller/authController';

const SaveIdAndFindPassword = forwardRef(
  (_, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="flex justify-between">
        <CheckboxWithLabel
          ref={ref}
          inputId={'remember'}
          labelText={'아이디 저장'}
        />
        <div className="flex items-center justify-end gap-1">
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-[#38CCDD] focus:text-[#38CCDD]"
            href={'/signup'}
          >
            회원가입
          </Link>
          <span className="cursor-default text-xs">|</span>
          <Link
            className="text-sm font-semibold text-gray-700 hover:text-[#38CCDD] focus:text-[#38CCDD]"
            href={'/find-password'}
          >
            비밀번호 찾기
          </Link>
        </div>
      </div>
    );
  },
);

SaveIdAndFindPassword.displayName = 'SaveIdAndFindPassword';

const SignInFormContainer = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    // mode: 'onBlur',
    resolver: zodResolver(loginRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const { mutateAsync } = usePostLogin();

  const rememberMeRef = useRef<HTMLInputElement>(null);

  const handleIsShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const submitForm = async (data: { email: string; password: string }) => {
    // console.log(data);
    /* 
      TODO: 로그인 API 호출, 에러처리
      성공시 메인페이지 or 유저정보입력 페이지 이동 로직 추가 필요
      jwt 토큰 저장
    */
    const payload: PostLoginPayload = {
      email: data.email,
      password: data.password,
    };
    try {
      await mutateAsync(payload, {
        onSuccess: () => {
          if (rememberMeRef.current && rememberMeRef.current.checked) {
            // 아이디 저장 체크박스 체크시 localStorage에 email 저장
            localStorage.setItem('email', data.email);
          } else {
            localStorage.removeItem('email');
          }
          router.push('/');
        },
        onError: (error) => {
          console.log('##err', error);
          setError('password', {
            message: '아이디 또는 비밀번호가 일치하지 않습니다.',
          });
        },
      });
    } catch (error) {}
  };

  useLayoutEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setValue('email', email);
      if (rememberMeRef.current) {
        rememberMeRef.current.checked = true;
      }
    }
  }, [setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          type={'email'}
          placeholder="아이디를 입력해주세요."
          id="email"
          register={register('email', {
            required: true,
          })}
          errorMsg={errors.email?.message}
        />
        <Input
          type={isShowPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          id="password"
          maxLength={15}
          register={register('password', {
            required: true,
          })}
          errorMsg={errors.password?.message}
        >
          <button
            type="button"
            onClick={handleIsShowPassword}
            className="absolute right-5 top-1/2 -translate-y-1/2 transform text-sm text-gray-400 hover:text-[#38CCDD]"
          >
            {isShowPassword ? 'HIDE' : 'SHOW'}
          </button>
        </Input>
        <button
          type="submit"
          className="mt-6 block w-full rounded-lg border bg-[#38CCDD] px-4 py-3 font-semibold text-white hover:border-[#38CCDD] hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-500"
        >
          로그인
        </button>
      </form>
      <SaveIdAndFindPassword ref={rememberMeRef} />
    </>
  );
};

export default SignInFormContainer;
