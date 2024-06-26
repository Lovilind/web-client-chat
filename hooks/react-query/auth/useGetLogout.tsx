import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getLogout } from '@/controller/authController';

const useGetLogout = () => {
  const { data, isLoading, error, refetch } = useQuery<
    {
      body: boolean;
      time: string;
    },
    AxiosError
  >({
    queryKey: ['logout'],
    queryFn: async () => {
      try {
        const response = await getLogout();
        localStorage.removeItem('accessToken');
        document.cookie =
          'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        return response.data;
      } catch (err) {
        throw err;
      }
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
  });
  return { data, isLoading, error, refetch };
};

export default useGetLogout;
