import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSendEmailCertification } from '@/controller/authController';

const useGetSendEmailCertification = ({ email }: { email: string }) => {
  const { data, isLoading, error, isError, refetch } = useQuery<
    {
      body: boolean;
      time: string;
    },
    AxiosError
  >({
    queryKey: ['sendCheckCode', email],
    queryFn: async () => {
      try {
        const response = await getSendEmailCertification(email);
        if (!response.data.body) {
          throw new Error('Email is already in use.');
        }
        return response.data;
      } catch (err) {
        throw err;
      }
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
  });
  if (isError) {
    if (error.message === 'timeout of 5000ms exceeded') {
      alert('Server status is unstable. Please try again.');
    }
  }
  return { data, isLoading, error, refetch };
};

export default useGetSendEmailCertification;
