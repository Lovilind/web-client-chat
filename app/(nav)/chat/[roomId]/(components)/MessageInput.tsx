'use client';

import React, { useRef } from 'react';
import { stomps } from '@/utils/StompCustomHooks';
import { StompData } from '@/models/StompData';

type MessageInputProps = Omit<StompData, 'event'>;

export default function MessageInput({
  stompClient,
  roomId,
}: MessageInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = inputRef.current?.value;
    if (message) {
      console.log('전송할 메세지 : ', message);
      stomps.sendChat(
        { stompClient, event: 'chat', roomId },
        { message, messageType: 'CHAT' },
      );
      inputRef.current.value = '';
    }
  };

  return (
    <form
      className="w-full absolute left-0 bottom-0 flex justify-center items-center gap-2"
      onSubmit={handleSendChat}
    >
      <input
        ref={inputRef}
        type="text"
        name="chat"
        className="text-black w-full h-[40px] rounded-md"
      />
      <button
        type="submit"
        color="primary"
        className="rounded-lg bg-blue-600 px-2 w-[100px] h-[40px]"
      >
        전송
      </button>
    </form>
  );
}
