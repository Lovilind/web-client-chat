import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getCheckEmailCertification } from '@/controller/authController';
import { useFormContext } from 'react-hook-form';

const useGetCheckEmailCertification = () => {
  const { getValues } = useFormContext();

  const { data, isLoading, error, refetch } = useQuery<
    {
      body: boolean;
      time: string;
    },
    AxiosError
  >({
    queryKey: ['checkCode', getValues('email'), getValues('code')],
    queryFn: async () => {
      const response = await getCheckEmailCertification(
        getValues('email'),
        getValues('code'),
      );
      return response?.data;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    initialData: {
      body: false,
      time: '',
    },
  });

  return { data, isLoading, error, refetch };
};

export default useGetCheckEmailCertification;
