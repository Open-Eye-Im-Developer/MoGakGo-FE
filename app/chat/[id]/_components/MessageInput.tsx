"use client";

import { useState } from "react";
import { Client } from "@stomp/stompjs";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { cn } from "@/app/_common/shadcn/utils";
import { buttonVariants } from "@/app/_common/shadcn/ui/button";

import { MessageType } from "../_types/message";

interface MessageInputProp {
  addNewMessage: (newMessage: MessageType[]) => void;
  clientRef: React.MutableRefObject<Client | null>;
  chatRoomId: string;
}

function MessageInput({
  addNewMessage,
  clientRef,
  chatRoomId,
}: MessageInputProp) {
  const [message, setMessage] = useState("");
  const { user } = useAuthStore();
  const hasBlankInMessage = !/\S+/.test(message);

  const handleChangeMessage = (message: string) => {
    setMessage(message);
  };

  const handleKeydownTextArea = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (
      hasBlankInMessage ||
      !(clientRef.current && clientRef.current.connected)
    )
      return;
    // post 요청
    // webSocket event 발행
    clientRef.current?.publish({
      destination: `/app/chatroom/${chatRoomId}`,
      body: JSON.stringify({
        messageType: "TALK",
        userId: user!.id,
        message,
      }),
    });

    const newMessage: MessageType = {
      content: message,
      senderId: "1",
      receiverId: "2",
      createdAt: new Date().toISOString(),
    };
    addNewMessage([newMessage]);
    setMessage("");
  };

  return (
    <div className="fixed bottom-0 h-32 w-full bg-slate-100">
      <textarea
        className="h-20 w-full overflow-scroll bg-slate-100 p-3 outline-none"
        onKeyDown={handleKeydownTextArea}
        rows={4}
        value={message}
        onChange={e => handleChangeMessage(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        contentEditable={false}
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "fixed bottom-0 right-0 m-1 h-8 bg-slate-200 hover:bg-slate-300",
        )}
      >
        전송
      </button>
    </div>
  );
}

export default MessageInput;
