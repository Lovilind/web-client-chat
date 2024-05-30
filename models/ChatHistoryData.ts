export type ChatHistoryItemData = {
  messageId: number;
  memberId: number;
  nickname: string;
  message: string;
  sendTime: string;
  messageType: string;
};

export type ChatHistoryData = {
  content: {
    messageList: ChatHistoryItemData[];
    lastSendMessageId: number; // 마지막으로 전송했던 읽었던 id
    chatroomId: number; //참가중인 채팅방 Id
    unReadMessageCount: number; //읽지 않는 메시지 수
  };
  sliceInfo: {
    hasNextPage: boolean; // 다음 페이지 존재 여부
  };
  code: string;
  timeStamp: string;
};
