import React from 'react';
import InputBox from './(components)/InputBox';
import MessageList from './(components)/MessageList';

export default function RoomId({ params }: { params: { roomId: string } }) {
  return (
    <section className="p-3 w-full max-w-screen-md	h-full bg-blue-200">
      <div className="relative w-full h-full flex justify-center">
        <MessageList roomId={params.roomId} />
        <InputBox />
      </div>
    </section>
  );
}
