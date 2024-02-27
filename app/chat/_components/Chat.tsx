import Link from "next/link";

import ActicityCard from "@/app/_common/components/ActivityCard";

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
      <ActicityCard
        name={matchedUser.username}
        profile_image={matchedUser.avatarUrl}
        detail={lastMessage}
        created_at={lastMessageCreatedAt}
      />
    </Link>
  );
}

export default Chat;
