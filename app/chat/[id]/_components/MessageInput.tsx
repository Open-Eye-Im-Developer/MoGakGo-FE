"use client";

import { useState, useMemo } from "react";
import dayjs from "dayjs";
import { Client } from "@stomp/stompjs";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { cn } from "@/app/_common/shadcn/utils";
import { buttonVariants } from "@/app/_common/shadcn/ui/button";

import { ChatType } from "../../_types/chat";
import useGetChats from "../../_api/useGetChats";

interface MessageInputProp {
  addNewMessage: (newMessage: MessageType[]) => void;
  publishSocketMessage: (userId: number, message: string) => void;
  clientRef: React.MutableRefObject<Client | null>;
  chatRoomId: string;
}

function MessageInput({
  addNewMessage,
  publishSocketMessage,
  clientRef,
  chatRoomId,
}: MessageInputProp) {
  const { chats } = useGetChats();

  const isActiveRoom = useMemo(() => {
    const room = chats.find(chat => chat.chatRoomId === chatRoomId) as ChatType;
    return room?.status;
  }, [chats, chatRoomId]);

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
      isActiveRoom === "CLOSE" ||
      hasBlankInMessage ||
      !(clientRef.current && clientRef.current.connected && user)
    )
      return;

    publishSocketMessage(user!.id, message);

    const newMessage: MessageType = {
      id: dayjs().format("YYYY-MM-DDTHH:mm:ss:SSS"),
      message,
      senderId: user.id,
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
          isActiveRoom === "CLOSE" && "hidden",
        )}
      >
        전송
      </button>
    </div>
  );
}

export default MessageInput;
