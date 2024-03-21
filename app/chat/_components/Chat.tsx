import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import Profile from "@/app/chat/[id]/_components/Profile";
import { cn } from "@/app/_common/shadcn/utils";

import { ChatType } from "../_types/chat";

interface ChatProps {
  chat: ChatType;
}

function Chat({ chat }: ChatProps) {
  const {
    chatRoomId,
    lastMessage,
    lastMessageCreatedAt,
    status,
    chatUserInfo: matchedUser,
  } = chat;

  dayjs.extend(relativeTime);

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
      <div
        className={cn(
          "m-2 flex cursor-pointer justify-between border-b p-2 px-3",
          status === "CLOSE" && "text-gray-400",
        )}
      >
        <Profile
          username={matchedUser.username}
          avatarUrl={matchedUser.avatarUrl}
        >
          <div>
            <div className="font-medium">{matchedUser.username}</div>
            <span className="block w-40 truncate text-gray-500">
              {lastMessage}
            </span>
          </div>
        </Profile>
        <div className="min-w-fit text-center text-sm text-gray-500">
          {dayjs(lastMessageCreatedAt).fromNow()}
        </div>
      </div>
    </Link>
  );
}

export default Chat;
