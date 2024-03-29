interface MessageType {
  id: string;
  message: string;
  senderId: number;
  createdAt?: string;
}

interface CustomMessageType extends MessageType {
  isTime: boolean;
}

interface ChatMessage extends MessageType {
  messageType: string;
}
