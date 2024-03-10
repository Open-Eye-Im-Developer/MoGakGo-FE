import Link from "next/link";

import { cn } from "@/app/_common/shadcn/utils";

import ActivityCard from "@/app/_common/components/ActivityCard";

import { ChatType } from "../_types/chat";

interface ChatProps {
  chat: ChatType;
}

function Chat({ chat }: ChatProps) {
  const {
    projectId,
    chatRoomId,
    lastMessage,
    lastMessageCreatedAt,
    status,
    chatUserInfo: matchedUser,
  } = chat;

  return (
    <Link href={`/chat/${chatRoomId}`} key={projectId}>
      <div className="relative">
        <ActivityCard
          name={matchedUser.username}
          profileImage={matchedUser.avatarUrl}
          detail={lastMessage}
          createdAt={lastMessageCreatedAt}
        />
        <div
          className={cn(
            "absolute bottom-2 right-4 m-2 rounded-[100%] bg-green-400 p-[3px]",
            status === "CLOSE" && "hidden",
          )}
        ></div>
      </div>
    </Link>
  );
}

export default Chat;
