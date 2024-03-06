export interface MessageType {
  id?: string;
  content: string;
  senderId: string;
  receiverId?: string;
  createdAt?: string;
}

export interface CustomMessageType extends MessageType {
  isTime: boolean;
}
