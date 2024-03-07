"use client";

import AnnounceEmptyActive from "@/app/_common/components/AnnounceEmptyNotification";

import chatEmptyAnimation from "../_assets/animation.json";
import useGetChats from "../_api/useGetChats";
import Chat from "./Chat";

function ChatList() {
  const { data: chats } = useGetChats();

  return (
    <>
      {chats && chats.data.length ? (
        [...chats.data]
          .reverse()
          .map(chat => <Chat chat={chat} key={chat.projectId} />)
      ) : (
        <AnnounceEmptyActive
          description="채팅목록이 비었어요"
          animation={chatEmptyAnimation}
        />
      )}
    </>
  );
}

export default ChatList;
