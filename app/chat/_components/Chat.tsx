import Link from "next/link";

import { cn } from "@/app/_common/shadcn/utils";

import ActivityCard from "@/app/_common/components/ActivityCard";

import { ChatType } from "../_types/chat";
import { ProfileType } from "../[id]/_types/chatRoom";

interface ChatProps {
  chat: ChatType;
}

function Chat({ chat }: ChatProps) {
  const { chatRoomId, lastMessage, lastMessageCreatedAt, status, profiles } =
    chat;

  const MY_ID = 1;
  const matchedUser = profiles?.find(
    profile => profile.userId !== MY_ID,
  ) as ProfileType;

  return (
    <Link
      href={{
        pathname: `/chat/${chatRoomId}`,
        query: {
          name: matchedUser.username,
          profileImage: matchedUser.avatarUrl,
        },
      }}
    >
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
