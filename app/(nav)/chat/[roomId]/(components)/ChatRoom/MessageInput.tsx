'use client';

import React, { useRef } from 'react';
import { stomps } from '@/utils/StompCustomHooks';
import { StompData } from '@/models/StompData';

type MessageInputProps = Omit<StompData, 'event'>;

export default function MessageInput({
  stompClient,
  roomId,
}: MessageInputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
      className="flex w-full items-center justify-center gap-2"
      onSubmit={handleSendChat}
    >
      <button
        type="button"
        className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-green-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-lg p-2 text-yellow-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <textarea
        rows={1}
        ref={inputRef}
        name="chat"
        className=" focus:ring-primary dark:focus:border-primary dark:focus:ring-primary block h-[40px] w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-300 dark:bg-white  dark:placeholder-gray-400"
        placeholder="메세지를 입력하세요"
      />
      <button
        type="submit"
        className="hover:text-primary inline-flex cursor-pointer justify-center p-2 text-blue-400"
      >
        <svg
          className="h-6 w-6 rotate-90"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
      </button>
      {/* <button
        type="submit"
        color="primary"
        className="h-[40px] w-[100px] rounded-lg bg-blue-600 px-2"
      >
        전송
      </button> */}
    </form>
  );
}
