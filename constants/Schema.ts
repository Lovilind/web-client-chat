import { z } from 'zod';
import { emailSchema, passwordSchema } from './CommonSchema';
import { mbtiList } from './mbti';

export const loginRegisterSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signUpRegisterSchema = z
  .object({
    email: emailSchema,
    code: z.string(),
    password: passwordSchema,
    passwordCheck: passwordSchema,
  })
  .superRefine(({ passwordCheck, password }, ctx) => {
    if (passwordCheck !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordCheck'],
      });
    }
  });

export const userFormSchema = z.object({ mbti: z.enum(mbtiList) });
