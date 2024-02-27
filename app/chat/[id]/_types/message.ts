export interface MessageType {
  id: string;
  content: string;
  SenderId: string;
  ReceiverId: string;
  createdAt: string;
}

export interface ProfileType {
  avatarUrl: string;
  username: string;
}
