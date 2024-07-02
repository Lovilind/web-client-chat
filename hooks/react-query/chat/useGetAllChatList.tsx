import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getAllChatList } from '@/controller/chatController';

const useGetAllChatList = () => {
  const { data, isLoading, error, refetch } = useQuery<
    {
      body: boolean;
      time: string;
    },
    AxiosError
  >({
    queryKey: ['allChatList'],
    queryFn: async () => {
      const response = await getAllChatList();
      return response?.data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
};

export default useGetAllChatList;
