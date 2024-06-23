import { ReceiveData } from '@/models/StompData';
import React from 'react';

interface MessageItemProps {
  messageData: ReceiveData;
}

export default function MessageItem({ messageData }: MessageItemProps) {
  // messageData에 유저 식별 정보 필요
  const user = localStorage.getItem('user');

  // 본인일때
  if (user && messageData.nickname.includes(user)) {
    return (
      <div className="flex flex-row-reverse items-end gap-2">
        <div className="mr-3 max-w-[60%] whitespace-pre-wrap break-words break-all	 rounded-xl	bg-primary px-4 py-2 text-sm shadow">
          {messageData.message}
        </div>
        <div className="flex flex-col items-end text-xs">
          <div className="text-yellow-400">1</div>
          <div>{messageData.sendTime?.split(' ')[1].slice(0, 5)}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
          A
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="text-xs">{messageData.nickname}</div>
          </div>
          <div className="flex items-end gap-2">
            <div className="max-w-[60%] whitespace-pre-wrap break-words	 break-all rounded-xl bg-white px-4 py-2 text-sm shadow">
              {messageData.message}
            </div>
            <div className="flex flex-col text-xs">
              <div className="text-yellow-400">1</div>
              <div>{messageData.sendTime?.split(' ')[1].slice(0, 5)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
