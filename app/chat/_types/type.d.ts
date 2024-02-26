interface ChatRoom {
  projectId: number;
  chatRoomId: string;
  lastMessage: string;
  lastMessageCreatedAt: string;
  status: string;
  profiles: {
    userId: number;
    username: string;
    avatarUrl: string;
  }[];
}

interface ChatMessage {
  messageType: string;
  senderId: number;
  message: string;
  createdAt: string;
}

interface ChatRoomDetail {
  project: {
    meetDetail: string;
    meetStartTime: string;
    meetEndTime: string;
  };
  data: ChatMessage[];
}

interface WebSocketMessage {
  messageType: string;
  senderId: number;
  message: string;
  chatRoomId: string;
}
