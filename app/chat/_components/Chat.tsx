import Link from "next/link";

import ActivityCard from "@/app/_common/components/ActivityCard";

import { ChatType } from "../types/chat";
import { ProfileType } from "../[id]/_types/message";

interface ChatProps {
  chat: ChatType;
}

function Chat({ chat }: ChatProps) {
  const {
    projectId,
    chatRoomId,
    lastMessage,
    lastMessageCreatedAt,
    // status,
    profiles,
  } = chat;

  const MY_ID = 1;
  const matchedUser = profiles.find(
    profile => profile.userId !== MY_ID,
  ) as ProfileType;

  return (
    <Link href={`/chat/${chatRoomId}`} key={projectId}>
      <ActivityCard
        name={matchedUser.username}
        profileImage={matchedUser.avatarUrl}
        detail={lastMessage}
        createdAt={lastMessageCreatedAt}
      />
    </Link>
  );
}

export default Chat;
