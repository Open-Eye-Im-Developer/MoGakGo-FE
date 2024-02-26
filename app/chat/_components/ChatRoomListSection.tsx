"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/app/_common/shadcn/ui/button";

interface ChatRoomListSectionProps {
  chatRoomList: ChatRoom[];
}

// TODO: 로직 파악을 위해 작성한 레이아웃입니다. 실제 구현 시에는 적절한 레이아웃을 사용해주세요.
function ChatRoomListSection(props: ChatRoomListSectionProps) {
  const { chatRoomList } = props;
  const router = useRouter();

  const handleClickChatRoom = (chatRoomId: string) => {
    router.push(`/chat/${chatRoomId}`);
  };

  return (
    <div>
      {chatRoomList.map(({ chatRoomId }) => (
        <Button
          onClick={() => handleClickChatRoom(chatRoomId)}
          key={chatRoomId}
        >
          입장
        </Button>
      ))}
    </div>
  );
}

export default ChatRoomListSection;
