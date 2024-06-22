/* eslint-disable @typescript-eslint/no-explicit-any */

import { PostSignUpPayload, postSignUp } from '@/controller/authController';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const usePostSignUp = () => {
  const mutaition = useMutation<any, AxiosError, PostSignUpPayload>({
    mutationFn: (payload) => postSignUp(payload),
  });
  return mutaition;
};

export default usePostSignUp;
