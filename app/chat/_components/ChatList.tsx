"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import AnnounceEmptyActive from "@/app/_common/components/AnnounceEmptyNotification";
import ActivityCardSkeleton from "@/app/_common/components/ActivityCardSkeleton";

import chatEmptyAnimation from "../_assets/animation.json";
import useGetChats from "../_api/useGetChats";
import Chat from "./Chat";

function ChatList() {
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetChats();
  const chats = data?.pages.map(page => (page ? page.data : [])).flat() ?? [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

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
      {chats.length ? (
        <>
          {[...chats].map(chat => (
            <Chat chat={chat} key={chat.chatRoomId} />
          ))}
          {hasNextPage && <div ref={ref} />}
        </>
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
