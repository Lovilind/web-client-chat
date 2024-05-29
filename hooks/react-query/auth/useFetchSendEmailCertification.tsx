/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import axiosInstance from '@/utils/axiosInstance';

const fetchCheckEmail = async (email: { email: string }) => {
  const response = await axiosInstance.post('/check-email', email);
  return response;
};

const useFetchSendEmailCertification = () => {
  const mutaition = useMutation<any, AxiosError, { email: string }>({
    mutationFn: (email) => fetchCheckEmail(email),
  });
  return mutaition;
};

export default useFetchSendEmailCertification;
