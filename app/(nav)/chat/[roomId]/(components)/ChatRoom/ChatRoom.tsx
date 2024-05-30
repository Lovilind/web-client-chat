'use client';

import { stomps } from '@/utils/StompCustomHooks';
import React, { useRef, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Client } from '@stomp/stompjs';
import { StompData } from '@/models/StompData';
import chatInstance from '@/utils/chatInstance';
import { ChatHistoryData } from '@/models/ChatHistoryData';

type ChatRoomProps = Pick<StompData, 'roomId'>;

export default function ChatRoom({ roomId }: ChatRoomProps) {
  const userInputRef = useRef<HTMLInputElement>(null);
  const [stompClient, setStompClient] = useState<Client>();
  const [chatHistory, setChatHistory] = useState<ChatHistoryData>();
  // 로그인 구현 전 임시로 유저 설정
  // 1, 2, 3 3가지로 테스트할것
  const handleUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInputRef.current?.value) {
      localStorage.setItem('user', userInputRef.current.value);

      const newStompClient = stomps.newStompClient(userInputRef.current.value);
      setStompClient(newStompClient);

      try {
        const chatHistoryData: ChatHistoryData = await chatInstance({
          method: 'GET',
          url: '/messages',
          headers: { Authorization: userInputRef.current.value },
          params: { roomId },
        });
        setChatHistory(chatHistoryData);
      } catch {
        alert('채팅 내역 가져오는데 실패');
      }
    }
  };

  // 채팅방 나가기 기능 미완성
  const handleLeaveChatRoom = async () => {
    if (stompClient && stompClient.connected) {
      stomps.leaveChatRoom({ stompClient, roomId });
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between gap-5 p-5">
      {stompClient ? (
        <>
          <button
            onClick={handleLeaveChatRoom}
            className="absolute right-1 top-1 rounded-md bg-yellow-300 px-2"
          >
            나가기
          </button>
          <MessageList
            chatHistory={chatHistory}
            stompClient={stompClient}
            roomId={roomId}
          ></MessageList>
          <MessageInput
            stompClient={stompClient}
            roomId={roomId}
          ></MessageInput>
        </>
      ) : (
        <form onSubmit={handleUser}>
          <input
            className="rounded-md text-black "
            ref={userInputRef}
            type="text"
            placeholder="임시 유저 토큰"
          />
          <button className="rounded-md bg-blue-500 px-2" type="submit">
            확인
          </button>
        </form>
      )}
    </div>
  );
}
