'use client';

import { ChattingRoomItem } from '@/components/ChattingRoomItem';
import Link from 'next/link';

export default function Chat() {
  //TODO: GA나 관련 이벤트는 구독해서 처리할 수 있도록 store로 옵저빙 형태로 처리하기
  const onClickFromChat = (eventName: string) => {
    console.warn('🚀 >> onClickFromChat >> eventName:', eventName);
  };

  return (
    <article className="page-container chat">
      <div className="fx-col fx-cntn-cntr layout-contents">
        <div className="wrap-contents def-padng-sd">
          <section className="wrap-contents-head fx-rw fx-algn-cntr">
            <div className="box-head-left">
              <h2 className="contents-header">채팅 리스트</h2>
            </div>
            <div className="box-head-right">
              <button
                className="filter-button wrap-btn"
                onClick={() =>
                  onClickFromChat('ON_CLICK_CHATTING_LIST_FILTER_BUTTON')
                }
              >
                필터
              </button>
            </div>
          </section>

          <ul className="wrap-chatting-room-list">
            <Link href={'/chat/1'}>
              <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            </Link>
            <Link href={'/chat/2'}>
              <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            </Link>
            <Link href={'/chat/3'}>
              <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            </Link>
            <Link href={'/chat/4'}>
              <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            </Link>
            <Link href={'/chat/5'}>
              <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            </Link>
            <Link href={'/chat/6'}>
              <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            </Link>
          </ul>
        </div>
      </div>
    </article>
  );
}
