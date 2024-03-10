"use client";

import AnnounceEmptyActive from "@/app/_common/components/AnnounceEmptyNotification";
import ActivityCardSkeleton from "@/app/_common/components/ActivityCardSkeleton";

import chatEmptyAnimation from "../_assets/animation.json";
import useGetChats from "../_api/useGetChats";
import Chat from "./Chat";

function ChatList() {
  const { chats, isLoading } = useGetChats();

  if (isLoading)
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <ActivityCardSkeleton key={index} />
        ))}
      </div>
    );

  return (
    <>
      {chats?.length ? (
        [...chats]
          .reverse()
          .map(chat => <Chat chat={chat} key={chat.chatRoomId} />)
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
