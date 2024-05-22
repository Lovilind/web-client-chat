import { UserThumbnail } from '@/components/UserThumbnail';
import { ReceiveData } from '@/models/StompData';
import React from 'react';

interface MessageItemProps {
  messageData: ReceiveData;
}

export default function MessageItem({ messageData }: MessageItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <UserThumbnail />
        <div className="text-xs">{messageData.nickname}</div>
      </div>
      <div className="flex items-end">
        <div className="rounded-3xl bg-neutral-400 px-4 py-1">
          {messageData.message}
        </div>
        <div className="text-xs">{messageData.sendTime}</div>
      </div>
    </div>
  );
}
