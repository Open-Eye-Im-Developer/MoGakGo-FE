import { ProfileType } from "../[id]/_types/chatRoom";

export interface ChatType {
  cursorId: number;
  projectId: number;
  chatRoomId: string;
  lastMessage: string;
  lastMessageCreatedAt: string;
  status: "OPEN" | "CLOSE";
  chatUserInfo: ChatProfileType;
}

export interface ChatRoomType {
  data: ChatType[];
}

export interface ChatProfileType extends ProfileType {
  userId: number;
}
