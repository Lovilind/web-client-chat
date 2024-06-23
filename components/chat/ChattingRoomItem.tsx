'use client';

import { UserThumbnail } from './UserThumbnail';

export const ChattingRoomItem = () => {
  return (
    <div id="lvl-chatting-room-item">
      <div className="box-info fx-rw top">
        <h3 className="room-title row-1">
          러브윈드 채팅방 익명의 그룹 소개팅 채팅방 제목 러브윈드 채팅방 익명의
          그룹 소개팅 채팅방 제목
        </h3>
        <label className="room-status-badge">대기중...</label>
      </div>

      <div className="box-info fx-rw mid">
        <p className="room-desc row-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          suscipit sint debitis vel quisquam aut iusto nihil laboriosam!
          Recusandae inventore facere rerum cum assumenda. Qui at fugit
          blanditiis nemo aut.
        </p>
        <span className="room-enter-count ">3/7</span>
      </div>

      <section className="box-info fx-rw bottom">
        <section className="wrap-interest">
          <label id="lvl-interest-badge">INFJ</label>
          <label id="lvl-interest-badge">여행</label>
          <label id="lvl-interest-badge">스포츠</label>
          <label id="lvl-interest-badge">서울</label>
          <label id="lvl-interest-badge">서울대</label>
          <label id="lvl-interest-badge">와인</label>
          <label id="lvl-interest-badge">한식</label>
          <label id="lvl-interest-badge">예술</label>
        </section>
        <section className="wrap-entry-thumbnails fx-rw">
          <UserThumbnail />
          <UserThumbnail />
          <UserThumbnail />
        </section>
      </section>
    </div>
  );
};
