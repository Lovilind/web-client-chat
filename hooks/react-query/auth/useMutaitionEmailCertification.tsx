/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import axiosInstance from '@/utils/axiosInstance';

const fetchCheckEmail = async (payload: { email: string; code: string }) => {
  const response = await axiosInstance.post(
    `/sign/issue?email=${email}`,
    payload,
  );
  // const response = await axiosInstance.post(
  //   '/msw/certification-email',
  //   payload,
  // );
  return response;
};

const useMutaitionEmailCertification = () => {
  const mutaition = useMutation<
    any,
    AxiosError,
    { email: string; code: string }
  >({
    mutationFn: (payload) => fetchCheckEmail(payload),
  });
  return mutaition;
};

export default useMutaitionEmailCertification;
