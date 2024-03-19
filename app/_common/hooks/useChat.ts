import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { Client } from "@stomp/stompjs";

import { useGetPrevMessageList } from "@/app/chat/[id]/_hooks/useGetPrevMessageList";

interface useChatProps {
  url: string;
  chatRoomId: string;
  userId: number;
}

function useChat({ url, chatRoomId, userId }: useChatProps) {
  const client = useRef<Client | null>(null);
  const {
    data: prevChatMessageList,
    isFetchedAfterMount,
    isLoading,
  } = useGetPrevMessageList(chatRoomId);

  const [messageList, setMessageList] = useState<CustomMessageType[]>([]);
  const [currentSender, setCurrentSender] = useState(userId);

  const connect = () => {
    const currentUserAccessToken = localStorage.getItem("accessToken");

    client.current = new Client({
      brokerURL: url,
      connectHeaders: {
        Authorization: `Bearer ${currentUserAccessToken}`,
      },
      reconnectDelay: 10000,
    });

    client.current.onConnect = () => {
      client.current?.subscribe(`/topic/chatroom/${chatRoomId}`, data => {
        const { id, message, senderId, createdAt } = JSON.parse(data.body);
        addNewMessage([
          {
            id,
            message,
            senderId,
            createdAt,
          },
        ]);
      });
    };

    client.current.onWebSocketError = e => {
      console.error(e);
    };

    client.current.activate();
  };

  const disconnect = () => {
    client.current?.deactivate();
  };

  const publishSocketMessage = (userId: number, message: string) => {
    client.current?.publish({
      destination: `/app/chatroom/${chatRoomId}`,
      body: JSON.stringify({
        messageType: "TALK",
        userId: userId,
        message,
      }),
    });
  };

  const checkOption = (newList: CustomMessageType[], message: MessageType) => {
    const prevTime = newList[newList.length - 1]?.createdAt;
    const prevSender = newList[newList.length - 1]?.senderId;
    return !(
      message.senderId === prevSender &&
      dayjs(message.createdAt).isSame(dayjs(prevTime), "minute")
    );
  };

  const addNewMessage = (newMessages: MessageType[]) => {
    newMessages.forEach((message: MessageType) => {
      return setMessageList(prev => {
        setCurrentSender(message.senderId);
        if (prev.length === 0) return [{ ...message, isTime: true }];
        return filterCustomMessages([...prev], message);
      });
    });
  };

  const filterCustomMessages = (
    newList: CustomMessageType[],
    message: MessageType,
  ) => {
    const isTime = checkOption(newList, message);
    const prevMessage = { ...newList[newList.length - 1], isTime: isTime };
    const newMessage = { ...message, isTime: true };

    newList.pop();
    newList.push(prevMessage);
    newList.push(newMessage);
    return newList;
  };

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    if (isFetchedAfterMount) {
      addNewMessage(prevChatMessageList!);
    }
  }, [isFetchedAfterMount, prevChatMessageList]);

  return {
    clientRef: client,
    publishSocketMessage,
    addNewMessage,
    messageList,
    currentSender,
    isLoadMessage: isLoading,
  };
}

export default useChat;
