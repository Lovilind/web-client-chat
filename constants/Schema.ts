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
