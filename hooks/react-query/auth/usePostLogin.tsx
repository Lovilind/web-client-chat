/* eslint-disable @typescript-eslint/no-explicit-any */

import { PostLoginPayload, postLogin } from '@/controller/authController';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const usePostLogin = () => {
  const mutaition = useMutation<any, AxiosError, PostLoginPayload>({
    mutationFn: (payload) => postLogin(payload),
  });
  return mutaition;
};

export default usePostLogin;
