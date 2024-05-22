import React from 'react';
import InputBox from './(components)/InputBox';
import MessageList from './(components)/MessageList';

export default function RoomId({ params }: { params: { roomId: string } }) {
  return (
    <section className="h-full w-full max-w-screen-md	bg-blue-200 p-3">
      <div className="relative flex h-full w-full justify-center">
        <MessageList roomId={params.roomId} />
        <InputBox />
      </div>
    </section>
  );
}
