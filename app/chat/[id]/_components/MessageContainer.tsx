"use client";

import { randomBytes } from "crypto";

import { DUMMY } from "../data";
import { useCustomMessage } from "../_hooks/useCustomMessage";
import MessageInput from "./MessageInput";
import Message from "./Message";

function MessageContainer() {
  const { messageList, addNewMessage } = useCustomMessage();

  const handleClickButton = () => addNewMessage(DUMMY);

  return (
    <div className="relative mt-20 h-full">
      <div className="fixed bottom-32 top-40 w-full overflow-y-scroll">
        <button onClick={handleClickButton}>test 용도의 임시</button>
        {messageList.map(message => (
          <Message message={message} key={`message.id${randomBytes(128)}`} />
        ))}
      </div>
      <MessageInput addNewMessage={addNewMessage} />
    </div>
  );
}

export default MessageContainer;
