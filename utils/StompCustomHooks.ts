'use client';

import { Client, IMessage } from '@stomp/stompjs';
import { useEffect, useState } from 'react';
import { ReceiveData, CommonChatData, StompData } from '@/models/StompData';

export const stomps = {
  // stompClient 생성
  newStompClient: (userToken: string) => {
    return new Client({
      brokerURL: 'wss://api.lovlind.me/api/ws',
      connectHeaders: { Authorization: userToken },
    });
  },
  // 메세지 수신
  useReceiveChat: ({ stompClient, event = 'chat', roomId }: StompData) => {
    const [messages, setMessages] = useState<ReceiveData>();

    useEffect(() => {
      stompClient.onConnect = (frame) => {
        console.log('서버와 연결됨');
        console.log('frame : ', frame);
        stompClient.subscribe(`/sub/${event}/${roomId}`, (msg: IMessage) => {
          console.log(`받은 메세지: ${msg.body}`);
          if (msg.body) {
            setMessages(JSON.parse(msg.body));
          }
        });
      };

      stompClient.activate();

      return () => {
        stompClient.deactivate();
      };
    }, [stompClient, event, roomId]);

    return messages;
  },
  // 메세지 송신
  sendChat: (
    { stompClient, event = 'chat', roomId }: StompData,
    { message, messageType = 'CHAT' }: CommonChatData,
  ) => {
    if (stompClient && stompClient.connected) {
      stompClient.publish({
        destination: `/pub/${event}/${roomId}`,
        body: JSON.stringify({
          messageType,
          message,
        }),
      });
    }
  },
  // unsubscribe 시 socket 연결 모두 끊어져야 함. 재확인 필요
  // 채팅방 나가기 (채팅방 유저에서 아예 삭제)
  leaveChatRoom: ({ stompClient, roomId }: Omit<StompData, 'event'>) => {
    stompClient.unsubscribe(roomId);
  },
};
