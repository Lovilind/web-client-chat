'use client';

import { Client, IMessage } from '@stomp/stompjs';
import { useEffect, useState } from 'react';
import { ReceiveData, SendData, StompData } from '@/models/StompData';

export const newStompClient = new Client({
  brokerURL: 'wss://api.lovlind.me/api/ws',
});

export const stomps = {
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
    }, [stompClient, event, roomId]);

    return messages;
  },
  useSendChat: (
    { stompClient, event = 'chat', roomId }: StompData,
    { message, writer = '작성자', messageType = 'CHAT' }: SendData,
  ) => {
    if (stompClient && stompClient.connected) {
      stompClient.publish({
        destination: `/pub/${event}/${roomId}`,
        body: JSON.stringify({
          messageType,
          writer,
          message,
        }),
      });
    }
  },
};
