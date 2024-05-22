import React from 'react';
import ChatRoom from './(components)/ChatRoom';

export default function RoomId({ params }: { params: { roomId: string } }) {
  return (
    <section className="p-3 w-full max-w-screen-md	h-full bg-blue-200">
      <ChatRoom roomId={params.roomId} />
    </section>
  );
}
