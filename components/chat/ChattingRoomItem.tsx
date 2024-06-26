'use client';

import { UserThumbnail } from './UserThumbnail';

const hashDummy = [
  'INFJ',
  '여행',
  '스포츠',
  '서울',
  '서울대',
  '와인',
  '한식',
  '예술',
];
export const ChattingRoomItem = () => {
  return (
    <>
      <p className="rounded-br-xl rounded-tl-lg px-4 py-1 text-sm font-bold text-white">
        FEATURED
      </p>

      <div className="mx-4">
        <p className="text-xs font-bold text-sky-500">[부제부제]</p>
        <p className="font-bold text-gray-600">
          러브윈드 채팅방 익명의 그룹 소개팅 채팅방 제목 러브윈드 채팅방 익명의
        </p>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure
          sed similique quod dolores reprehenderit? Est perferendis, magni odit
          dicta vitae sed eaque.
        </p>
        <p className="text-gray-400"> Beginner speakers </p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {hashDummy.map((item) => {
              return (
                <label
                  className="inline-block cursor-pointer text-[12px] text-gray-400 underline"
                  key={item}
                >
                  #{item}
                </label>
              );
            })}
          </div>
          <ul>
            <li>
              <UserThumbnail />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
