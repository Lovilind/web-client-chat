'use client';

import { ChattingRoomItem } from '@/components/chat/ChattingRoomItem';
import Link from 'next/link';

export default function ChatPage() {
  return (
    <article className="">
      <div className="mx-auto flex h-full flex-col justify-center bg-white">
        <div className="flex h-full flex-col gap-4 px-4">
          <section className="flex items-center justify-between border-b pb-4">
            <div className="">
              <h2 className="">채팅 리스트</h2>
            </div>
            <div className="">
              <button className="">필터</button>
            </div>
          </section>

          <ul className="flex flex-col gap-4">
            {Array.from({ length: 40 }).map((_, idx) => {
              return (
                <li key={idx} className="border">
                  <Link href={`/chat/${idx + 1}`}>
                    {/* {idx + 1} */}
                    <ChattingRoomItem />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
