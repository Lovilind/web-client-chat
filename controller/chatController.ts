import axiosInstance from '@/utils/axiosInstance';

export const getAllChatList = async () => {
  return axiosInstance.get('/chatroom?page=1&limit=1');
};
export const getMyChatList = async () => {
  return axiosInstance.get('/chatroom/my?page=1&limit=1');
};
