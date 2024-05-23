import React from 'react';
import ChatRoom from './(components)/ChatRoom';

export default function RoomId({ params }: { params: { roomId: string } }) {
  return (
    <section className="h-full w-full max-w-screen-md	bg-blue-200 p-3">
      <ChatRoom roomId={params.roomId} />
    </section>
  );
}
