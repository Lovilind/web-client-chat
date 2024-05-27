/* eslint-disable import/no-extraneous-dependencies */
import { z } from 'zod';
import { emailSchema, passwordSchema } from './CommonSchema';

export const loginRegisterSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signUpRegisterSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    passwordCheck: passwordSchema,
    nickname: z.string().nonempty('닉네임을 입력해주세요.'),
    gender: z.string().nonempty('성별을 선택해주세요.'),
    birth: z.string().nonempty('날짜를 선택해주세요.'),
    phone: z
      .string()
      .nonempty('핸드폰 번호를 선택해주세요.')
      .regex(
        /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
        '핸드폰 번호를 다시 확인해주세요.',
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
