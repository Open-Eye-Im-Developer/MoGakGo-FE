"use client";

import { useEffect, useState } from "react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";

import useChat from "@/app/_common/hooks/useChat";

import { useScroll } from "../_hooks/useScroll";
import UpScrollButton from "./UpScrollButton";
import MessageInput from "./MessageInput";
import Message from "./Message";

interface MessageContainerProps {
  chatRoomId: string;
  isInCard?: boolean;
}

// TODO: props로 받은 chatMessageList를 useCustomMessage에 넘겨서 필터링 처리
function MessageContainer(props: MessageContainerProps) {
  const { chatRoomId, isInCard } = props;
  const { user } = useAuthStore();
  const {
    clientRef,
    publishSocketMessage,
    addNewMessage,
    messageList,
    currentSender,
    isLoadMessage,
  } = useChat({
    url: "ws://3.38.76.76:8080/chat",
    chatRoomId,
    userId: user!.id,
  });

  const { scrollRef, handleScroll, scrollToBottom, isScrollUpper } =
    useScroll();
  const [exposureMessage, setExposureMessage] = useState("");

  useEffect(() => {
    if (currentSender !== user!.id && isScrollUpper)
      return setExposureMessage(messageList[messageList.length - 1].message);
    scrollToBottom();
  }, [messageList]);

  useEffect(() => {
    if (!isScrollUpper) setExposureMessage("");
  }, [isScrollUpper]);

  return (
    <div className="relative flex h-full w-full grow flex-col">
      <div
        className="bottom-32 top-40 h-96 w-full grow overflow-y-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <>
          {isLoadMessage && <div>Loading...</div>}
          {!isLoadMessage &&
            messageList.map(message => (
              <Message message={message} key={message.id} userId={user!.id} />
            ))}
        </>
      </div>
      <UpScrollButton
        scrollToBottom={scrollToBottom}
        isScrollUpper={isScrollUpper}
        message={exposureMessage}
      />
      <MessageInput
        addNewMessage={addNewMessage}
        publishSocketMessage={publishSocketMessage}
        clientRef={clientRef}
        chatRoomId={chatRoomId}
        isInCard={isInCard}
      />
    </div>
  );
}

export default MessageContainer;
