import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getCheckValidEmail } from '@/controller/authController';

const useGetCheckValidEmail = ({ email }: { email: string }) => {
  const { data, isLoading, error, isError, refetch } = useQuery<
    {
      body: boolean;
      time: string;
    },
    AxiosError
  >({
    queryKey: ['checkEmail', email],
    queryFn: async () => {
      try {
        const response = await getCheckValidEmail(email);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    initialData: {
      body: false,
      time: '',
    },
  });
  if (isError) {
    if (error.message === 'timeout of 5000ms exceeded') {
      alert('Server status is unstable. Please try again.');
    }
  }
  return { data, isLoading, error, refetch };
};

export default useGetCheckValidEmail;
