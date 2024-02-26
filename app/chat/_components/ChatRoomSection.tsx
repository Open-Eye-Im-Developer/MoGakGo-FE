"use client";

import React, { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

import { Input } from "@/app/_common/shadcn/ui/input";
import { Button } from "@/app/_common/shadcn/ui/button";

interface ChatRoomSectionProps {
  chatMessageList: ChatMessage[];
  chatRoomId: string;
}

// TODO: 로직 파악을 위해 작성한 레이아웃입니다. 실제 구현 시에는 적절한 레이아웃을 사용해주세요.
function ChatRoomSection(props: ChatRoomSectionProps) {
  const { chatMessageList, chatRoomId } = props;
  const [currentChatList, setCurrentChatList] =
    useState<Partial<ChatMessage>[]>(chatMessageList);
  const [message, setMessage] = useState<string>("");
  const client = useRef<Client | null>(null);

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  const connect = () => {
    try {
      client.current = new Client({
        brokerURL: "ws://주소",
        connectHeaders: {},
        debug: (str: string) => {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      // TODO: 메시지 구독(수신) 함수 -> 실제 API 주소 & chatRoomId 연결
      client.current.onConnect = () => {
        client.current?.subscribe(`/${chatRoomId}`, data => {
          if (data && data.body) {
            const { messageType, senderId, message } = JSON.parse(data.body);
            if (messageType === "TALK") {
              setCurrentChatList(prev => [
                ...prev,
                { messageType, senderId, message },
              ]);
            }
          }
        });
      };

      client.current.activate();
    } catch (error) {
      console.error(error);
    }
  };

  const disconnect = () => {
    if (client.current === null) return;

    client.current.deactivate();
  };

  const handleSendMessage = () => {
    if (!message || message.trim().length === 0) return;
    client.current?.publish({
      destination: `주소`,
      body: JSON.stringify({
        messageType: "TALK",
        chatRoomId: "채팅방 아이디",
        senderId: "메시지 송신 주체자 아이디",
        message,
      }),
    });

    setMessage("");
  };

  return (
    <div>
      {currentChatList.map((chat, index) => (
        <div key={index}>
          <p>{chat.message}</p>
        </div>
      ))}
      <Input />
      <Button onClick={handleSendMessage}>전송</Button>
    </div>
  );
}

export default ChatRoomSection;
