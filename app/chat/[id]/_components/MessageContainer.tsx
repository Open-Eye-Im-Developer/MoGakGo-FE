"use client";

import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

import { useAuthStore } from "@/app/_common/store/useAuthStore";

import { useScroll } from "../_hooks/useScroll";
import { useGetPrevMessageList } from "../_hooks/useGetPrevMessageList";
import { useCustomMessage } from "../_hooks/useCustomMessage";
import UpScrollButton from "./UpScrollButton";
import MessageInput from "./MessageInput";
import Message from "./Message";

interface MessageContainerProps {
  chatRoomId: string;
}

// TODO: props로 받은 chatMessageList를 useCustomMessage에 넘겨서 필터링 처리
function MessageContainer(props: MessageContainerProps) {
  const { chatRoomId } = props;
  const { data: prevChatMessageList, isFetchedAfterMount } =
    useGetPrevMessageList(chatRoomId);
  const client = useRef<Client | null>(null);
  const { user } = useAuthStore();
  const { messageList, addNewMessage, currentSender } = useCustomMessage(
    user!.id,
  );

  const { scrollRef, handleScroll, scrollToBottom, isScrollUpper } =
    useScroll();
  const [exposureMessage, setExposureMessage] = useState("");

  const connect = () => {
    const currentUserAccessToken = localStorage.getItem("accessToken");

    client.current = new Client({
      brokerURL: "ws://3.38.76.76:8080/chat",
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

  useEffect(() => {
    if (currentSender !== user!.id && isScrollUpper)
      return setExposureMessage(messageList[messageList.length - 1].message);
    scrollToBottom();
  }, [messageList]);

  useEffect(() => {
    if (!isScrollUpper) setExposureMessage("");
  }, [isScrollUpper]);

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

  return (
    <div className="relative mt-20 h-full w-full">
      <div
        className="fixed bottom-32 top-40 w-full overflow-y-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {messageList.map(message => (
          <Message message={message} key={message.id} userId={user!.id} />
        ))}
      </div>
      <UpScrollButton
        scrollToBottom={scrollToBottom}
        isScrollUpper={isScrollUpper}
        message={exposureMessage}
      />
      <MessageInput
        addNewMessage={addNewMessage}
        clientRef={client}
        chatRoomId={chatRoomId}
      />
    </div>
  );
}

export default MessageContainer;
