'use client';

import { stomps } from '@/utils/StompCustomHooks';
import React, { useEffect, useState } from 'react';
import MessageItem from './MessageItem';
import { ReceiveData, StompData } from '@/models/StompData';
import { ChatHistoryData, ChatHistoryItemData } from '@/models/ChatHistoryData';

type MessageListProps = Omit<StompData, 'event'> & {
  chatHistory: ChatHistoryData | undefined;
};

export default function MessageList({
  chatHistory,
  stompClient,
  roomId,
}: MessageListProps) {
  const [messageList, setMessageList] = useState<
    ChatHistoryItemData[] | ReceiveData[]
  >(chatHistory?.content.messageList || []);

  const messageData = stomps.useReceiveChat({
    stompClient,
    event: 'chat',
    roomId,
  });

  useEffect(() => {
    if (messageData) {
      setMessageList((prev) => [...prev, messageData]);
    }
  }, [messageData]);

  if (messageList.length) {
    return (
      <ul>
        {messageList.map((message: ReceiveData, idx: number) => (
          <MessageItem key={idx} messageData={message} />
        ))}
      </ul>
    );
  } else {
    return <div>대화가 없습니다</div>;
  }
}
