'use client';

import React, { useRef } from 'react';
import { newStompClient, stomps } from '@/utils/StompCustomHooks';

export default function InputBox() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSendChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = inputRef.current?.value;
    if (message) {
      console.log('전송할 메세지 : ', message);
      stomps.useSendChat(
        { stompClient: newStompClient, event: 'chat', roomId: 1 },
        { message, writer: 1, messageType: 'CHAT' },
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
