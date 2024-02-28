"use client";

import { randomBytes } from "crypto";

import { DUMMY } from "../data";
import { useCustomMessage } from "../_hooks/useCustomMessage";
import Message from "./Message";

function MessageList() {
  const { messageList, addNewMessage } = useCustomMessage();

  const handleClickButton = () => addNewMessage(DUMMY);

  return (
    <div className="mt-20">
      <button onClick={handleClickButton}>test 용도의 임시</button>
      {messageList.map(message => (
        <Message message={message} key={`message.id${randomBytes(128)}`} />
      ))}
    </div>
  );
}

export default MessageList;
