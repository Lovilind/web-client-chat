import { Client } from '@stomp/stompjs';

export type StompData = {
  stompClient: Client;
  event: string;
  roomId: number | string;
};

export type CommonChatData = {
  messageType: string;
  message: string;
};

export type SendData = CommonChatData & {
  writer: string | number;
};

export type ReceiveData = CommonChatData & {
  nickname: string;
  sendTime: string;
};
