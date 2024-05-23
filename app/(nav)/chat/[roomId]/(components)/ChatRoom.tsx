'use client';

import { stomps } from '@/utils/StompCustomHooks';
import React, { useRef, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Client } from '@stomp/stompjs';
import { StompData } from '@/models/StompData';

type ChatRoomProps = Pick<StompData, 'roomId'>;

export default function ChatRoom({ roomId }: ChatRoomProps) {
  const userInputRef = useRef<HTMLInputElement>(null);
  const [stompClient, setStompClient] = useState<Client>();

  // 로그인 구현 전 임시로 유저 설정
  // 1, 2, 3 3가지로 테스트할것
  const handleUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInputRef.current?.value) {
      const newStompClient = stomps.newStompClient(userInputRef.current.value);
      setStompClient(newStompClient);
    }
  };

  // 채팅방 나가기 기능 미완성
  const handleLeaveChatRoom = async () => {
    if (stompClient && stompClient.connected) {
      stomps.leaveChatRoom({ stompClient, roomId });
    }
  };

  return (
    <div className="relative w-full h-full flex justify-center">
      {stompClient ? (
        <>
          <button
            onClick={handleLeaveChatRoom}
            className="absolute right-1 top-1 bg-yellow-300 rounded-md px-2"
          >
            나가기
          </button>
          <MessageList stompClient={stompClient} roomId={roomId}></MessageList>
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
          <button className="bg-blue-500 rounded-md px-2" type="submit">
            확인
          </button>
        </form>
      )}
    </div>
  );
}
