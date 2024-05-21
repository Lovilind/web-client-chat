/* eslint-disable import/no-extraneous-dependencies */
import { z } from 'zod';

export const loginRegisterSchema = z.object({
  email: z
    .string()
    .nonempty('이메일을 입력해주세요.')
    .email('이메일 형식을 입력해주세요.'),
  password: z
    .string()
    .nonempty('비밀번호를 입력해주세요.')
    .regex(
      /^(?=.*[!@#$%^*+=-]).{8,15}$/,
      '특수문자를 포함한 8~15자리를 입력해주세요.',
    ),
});

export const signUpRegisterSchema = z
  .object({
    email: z
      .string()
      .nonempty('이메일을 입력해주세요.')
      .email('이메일 형식을 입력해주세요.'),
    password: z
      .string()
      .nonempty('비밀번호를 입력해주세요.')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
        '영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요.',
      ),
    passwordCheck: z
      .string()
      .nonempty('비밀번호를 입력해주세요.')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
        '영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요.',
      ),
    universityName: z.string().nonempty('학교명을 입력해주세요.'),
  })
  .superRefine(({ passwordCheck, password }, ctx) => {
    if (passwordCheck !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호를 다시 확인해주세요.',
        path: ['passwordCheck'],
      });
    }
  });
