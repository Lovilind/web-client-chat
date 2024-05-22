import { Client } from '@stomp/stompjs';

export type StompData = {
  stompClient: Client;
  event: string;
  roomId: string;
};

export type CommonChatData = {
  messageType: string;
  message: string;
};

export type SendData = CommonChatData & {
  // writer: string; // authorization에 유저토큰으로 넘길 예정
};

export type ReceiveData = CommonChatData & {
  nickname: string;
  sendTime: string;
};
