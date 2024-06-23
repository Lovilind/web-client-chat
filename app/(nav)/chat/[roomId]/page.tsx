import React from 'react';
import ChatRoom from '../../../../components/chat/ChatRoom/ChatRoom';

export default function RoomId({ params }: { params: { roomId: string } }) {
  return (
    <section className="w-full bg-[#D2E9EA] lg:flex-1">
      <ChatRoom roomId={params.roomId} />
    </section>
  );
}
