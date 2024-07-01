'use client';
import { ChattingRoomItem } from '@/components/chat/ChattingRoomItem';
import { IconFilter, IconMagnifier } from '@/components/icons';
import Link from 'next/link';

export default function ChatPage() {
  return (
    <article className="">
      <div className="mx-auto flex h-full flex-col justify-center bg-white">
        <div className="relative flex h-full flex-col gap-4 px-4">
          <section className="sticky top-[105px] flex h-16 items-center justify-between border-b bg-white lg:top-0">
            {/* <section className="flex items-center justify-between border-b pb-4 lg:sticky lg:top-0 lg:h-16 lg:bg-white"> */}
            <div className="">
              <h2 className="">채팅 리스트</h2>
            </div>
            <div className="flex gap-4">
              <button>
                <i className="inline-block h-5 w-5">
                  <IconMagnifier className="fill-gray-600 hover:fill-primary" />
                </i>
              </button>
              <button>
                <i className="inline-block h-5 w-5">
                  <IconFilter className="stroke-gray-600 hover:stroke-primary" />
                </i>
              </button>
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
