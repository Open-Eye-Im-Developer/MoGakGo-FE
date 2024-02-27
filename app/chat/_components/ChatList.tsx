"use client";
import AnnounceEmptyActive from "@/app/_common/components/AnnounceEmptyNotification";

import { DUMMY } from "../data";
import chatEmptyAnimation from "../_assets/animation.json";
import Chat from "./Chat";

function ChatList() {
  return (
    <>
      {DUMMY?.length ? (
        [...DUMMY]
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
