// 채팅방 페이지 - Server Component
import React from "react";

import ChatRoomSection from "../_components/ChatRoomSection";

/**
 * getPreviousChatMessageList는 특정 채팅방의 이전 채팅 메시지 목록을 가져오는 비동기 함수입니다.
 * API로부터 채팅 메시지 목록을 가져와서 JSON 형태로 파싱합니다.
 *
 * @async
 * @function
 * @param {string} chatRoomId - 채팅방의 ID
 * @returns {Promise<{props: {chatMessageList: object}, revalidate: number}>} 채팅 메시지 목록 정보와 revalidate 시간을 포함한 객체를 반환합니다.
 *
 * 채팅 메시지 목록(chatMessageList)은 아래의 구조를 가집니다:
 * {
 *  "project":{
 *    "meetDetail": string,
 *    "meetStartTime": string,
 *    "meetEndTime": string,
 *  },
 *  "data": [
 *    {
 *      "messageType": string,
 *      "senderId": number,
 *      "message": string,
 *      "createdAt": string
 *    },
 *  ]
 * }
 *
 * revalidate는 페이지 재검증 시간을 의미합니다. 단위는 초입니다.
 */
// TODO: 로직 파악을 위해 작성한 레이아웃입니다. 실제 구현 시에는 적절한 레이아웃을 사용해주세요.
async function getPreviousChatMessageList(chatRoomId: string) {
  const response = await fetch(
    `/api/chat/chat-room/${chatRoomId}/message-list`,
  );
  const chatMessageList = await response.json();

  return {
    props: {
      chatMessageList,
    },
    revalidate: 60,
  };
}

async function ChatRoomPage({ props }: { props: { chatRoomId: string } }) {
  const {
    props: { chatMessageList },
  } = await getPreviousChatMessageList(props.chatRoomId);

  return (
    <ChatRoomSection
      chatMessageList={chatMessageList}
      chatRoomId={props.chatRoomId}
    />
  );
}

export default ChatRoomPage;
