'use client';

import { stomps, newStompClient } from '@/utils/StompCustomHooks';
import React from 'react';
import MessageBox from './MessageBox';

export default function MessageList({ roomId }: { roomId: string }) {
  const messageData = stomps.useReceiveChat({
    stompClient: newStompClient,
    event: 'chat',
    roomId: Number(roomId),
  });
  if (messageData) {
    return (
      <ul>
        <MessageBox messageData={messageData} />
      </ul>
    );
  } else {
    return <div>대화가 없습니다</div>;
  }
}
