import axiosInstance from '@/utils/axiosInstance';

export const getAllChatList = async () => {
  return axiosInstance.get('/chatroom?page=1&limit=10');
};
export const getMyChatList = async () => {
  return axiosInstance.get('/chatroom/my?page=1&limit=10');
};

export const postCreateChatRoom = async ({
  chatRoomId,
  userId,
}: {
  chatRoomId: string;
  userId: string;
}) => {
  axiosInstance.post(`/chatroom/${chatRoomId}`, { chatRoomId, userId });
};
export const deleteChatRoom = async ({
  chatRoomId,
}: {
  chatRoomId: string;
}) => {
  axiosInstance.delete(`/chatroom/${chatRoomId}`);
};
