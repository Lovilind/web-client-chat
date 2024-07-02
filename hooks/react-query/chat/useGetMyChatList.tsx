import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getMyChatList } from '@/controller/chatController';

const useGetMyChatList = () => {
  const { data, isLoading, error, refetch } = useQuery<
    {
      body: boolean;
      time: string;
    },
    AxiosError
  >({
    queryKey: ['myChatList'],
    queryFn: async () => {
      const response = await getMyChatList();
      return response?.data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
};

export default useGetMyChatList;
