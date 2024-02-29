"use client";

import { randomBytes } from "crypto";

import { useEffect, useState } from "react";

import { DUMMY } from "../data";
import { useScroll } from "../_hooks/useScroll";
import { useCustomMessage } from "../_hooks/useCustomMessage";
import UpScrollButton from "./UpScrollButton";
import MessageInput from "./MessageInput";
import Message from "./Message";

function MessageContainer() {
  const { messageList, addNewMessage, currentSender } = useCustomMessage();
  const { scrollRef, handleScroll, scrollToBottom, isScrollUpper } =
    useScroll();
  const MY_ID = "1";
  const [exposureMessage, setExposureMessage] = useState("");

  useEffect(() => {
    if (currentSender !== MY_ID && isScrollUpper)
      return setExposureMessage(messageList[messageList.length - 1].content);
    scrollToBottom();
  }, [messageList]);

  useEffect(() => {
    if (!isScrollUpper) setExposureMessage("");
  }, [isScrollUpper]);

  const handleClickButton = () => addNewMessage(DUMMY);

  return (
    <div className="relative mt-20 h-full w-full">
      <div
        className="fixed bottom-32 top-40 w-full overflow-y-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <button onClick={handleClickButton}>test 용도의 임시 버튼</button>
        {messageList.map(message => (
          <Message message={message} key={`message.id${randomBytes(128)}`} />
        ))}
      </div>
      <UpScrollButton
        scrollToBottom={scrollToBottom}
        isScrollUpper={isScrollUpper}
        message={exposureMessage}
      />
      <MessageInput addNewMessage={addNewMessage} />
    </div>
  );
}

export default MessageContainer;
