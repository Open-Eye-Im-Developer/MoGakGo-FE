// 채팅방 목록 페이지 - Server Component
import React from "react";

import ChatRoomListSection from "./_components/ChatRoomListSection";

/**
 * getChatRoomList는 채팅방 목록을 가져오는 비동기 함수입니다.
 * API로부터 채팅방 목록을 가져와서 JSON 형태로 파싱합니다.
 *
 * @async
 * @function
 * @returns {Promise<{props: {chatRoomList: object[]}, revalidate: number}>} 채팅방 목록 정보와 revalidate 시간을 포함한 객체를 반환합니다.
 *
 * 채팅방 목록(chatRoomList)은 아래의 구조를 가집니다:
 * [
 *  {
 *    "projectId": number,
 *    "chatRoomId": string,
 *    "lastMessage": string, // 미구현 상태입니다.
 *    "lastMessageCreatedAt": string, // 미구현 상태입니다.
 *    "status": string, // 채팅방의 상태(OPEN or CLOSE)
 *    "profiles":[
 *      {
 *        "userId": number,
 *        "username": string,
 *        "avatarUrl": string
 *      },
 *      {
 *        "userId": number,
 *        "username": string,
 *        "avatarUrl": string
 *      }
 *    ]
 *  }
 * ]
 *
 * revalidate는 페이지 재검증(refetch) 시간을 의미합니다. 단위는 초입니다.
 */
// TODO: 로직 파악을 위해 작성한 레이아웃입니다. 실제 구현 시에는 적절한 레이아웃을 사용해주세요.
async function getChatRoomList() {
  const response = await fetch("/api/chat/chat-room-list");
  const chatRoomList = await response.json();

  return {
    props: {
      chatRoomList,
    },
    revalidate: 60,
  };
}

async function ChatPage() {
  const {
    props: { chatRoomList },
  } = await getChatRoomList();
  return <ChatRoomListSection chatRoomList={chatRoomList} />;
}

export default ChatPage;
