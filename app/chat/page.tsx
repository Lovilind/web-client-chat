'use client';

import { ChattingRoomItem } from '@/components/ChattingRoomItem';

import { GlobalNavigation } from '@/components/GlobalNavigation';
import { TopHeader } from '@/components/TopHeader';

export default function Chat() {
  //TODO: GA나 관련 이벤트는 구독해서 처리할 수 있도록 store로 옵저빙 형태로 처리하기
  const onClickFromChat = (eventName: string) => {
    console.warn('🚀 >> onClickFromChat >> eventName:', eventName);
  };

  return (
    <article className="page-container chat">
      <div className="fx-col fx-cntn-cntr layout-contents">
        <TopHeader onClickTopHeader={onClickFromChat} />
        <div className="wrap-contents def-padng-sd">
          <section className="wrap-contents-head fx-rw fx-algn-cntr">
            <div className="box-head-left">
              <h2 className="contents-header">채팅 리스트</h2>
            </div>
            <div className="box-head-right">
              <button
                className="filter-button wrap-btn"
                onClick={(e: unknown) =>
                  onClickFromChat('ON_CLICK_CHATTING_LIST_FILTER_BUTTON')
                }
              >
                필터
              </button>
            </div>
          </section>

          <ul className="wrap-chatting-room-list">
            <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
            <ChattingRoomItem onClickChattingRoomItem={onClickFromChat} />
          </ul>
        </div>
        <GlobalNavigation onClickGlobalNavigation={onClickFromChat} />
      </div>
    </article>
  );
}
