"use client";

import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

import { useScroll } from "../_hooks/useScroll";
import { useCustomMessage } from "../_hooks/useCustomMessage";
import UpScrollButton from "./UpScrollButton";
import MessageInput from "./MessageInput";
import Message from "./Message";

interface MessageContainerProps {
  chatRoomId: string;
}

// TODO: props로 받은 chatMessageList를 useCustomMessage에 넘겨서 처리(가공)
function MessageContainer(props: MessageContainerProps) {
  const { chatRoomId } = props;
  const client = useRef<Client | null>(null);
  const { messageList, addNewMessage, currentSender } = useCustomMessage();
  const { scrollRef, handleScroll, scrollToBottom, isScrollUpper } =
    useScroll();
  const MY_ID = "1";
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
      client.current?.subscribe(`/topic/chatroom/${chatRoomId}`, () => {
        // TODO: 받은 메시지 addNewMessage로 messageList에 추가하기
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
    if (currentSender !== MY_ID && isScrollUpper)
      return setExposureMessage(messageList[messageList.length - 1].content);
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

  return (
    <div className="relative mt-20 h-full w-full">
      <div
        className="fixed bottom-32 top-40 w-full overflow-y-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {messageList.map(message => (
          <Message message={message} key={message.id} />
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
