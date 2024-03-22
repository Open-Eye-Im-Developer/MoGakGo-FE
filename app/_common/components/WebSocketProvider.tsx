"use client";

import React, { useEffect, useRef, useState } from "react";

import { useQueryUserData } from "@/app/my-page/_hooks/useQueryUserData";

import { Achievement } from "../types/user";
import { cn } from "../shadcn/utils";
import { useToast } from "../shadcn/ui/use-toast";
import { Progress } from "../shadcn/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { getAchievementDetail } from "../api/achievements";
import { ModalState } from "./types/achievementModal";
import AchievementModal from "./AchievementModal";

interface WebSocketMessage {
  userId: Achievement["userId"];
  achievementId: Achievement["achievementId"];
  completed: Achievement["completed"];
  progressCount: Achievement["progressCount"];
}

export const WebSocketContext = React.createContext(null);

export const WebSocketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { toast } = useToast();
  const { data: userData } = useQueryUserData();
  const [message, setMessage] = useState<WebSocketMessage | null>(null);
  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const webSocket = useRef<WebSocket | null>(null);
  const webSocketUrl = "wss://3.38.76.76:8080/ws/achievement";
  let reconnectInterval: NodeJS.Timeout;

  const connect = () => {
    webSocket.current = new WebSocket(webSocketUrl);
    webSocket.current.onopen = () => {
      webSocket.current?.send(JSON.stringify({ userId: userData?.id }));
      clearInterval(reconnectInterval);
    };

    webSocket.current.onclose = error => {
      reconnectInterval = setInterval(() => reconnect(), 5000);
      console.log(error);
    };

    webSocket.current.onerror = error => {
      console.log(error);
    };

    webSocket.current.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      setMessage(data);
    };
  };

  const disconnect = () => {
    clearInterval(reconnectInterval);
    webSocket.current?.close();
  };

  const reconnect = () => {
    if (webSocket.current?.readyState !== WebSocket.CONNECTING && userData) {
      webSocket.current = new WebSocket(webSocketUrl);
      connect();
    }
  };

  useEffect(() => {
    if (userData) {
      connect();
    }

    return () => {
      disconnect();
    };
  }, [userData]);

  useEffect(() => {
    async function getAchievementTitle(message: WebSocketMessage) {
      const { achievementId, completed, progressCount } = message;
      const { title, imgUrl, requirementValue } =
        await getAchievementDetail(achievementId);

      const achievementTitle = title ?? "null";
      const toastTitle = "업적 진행률 갱신!";
      const percentage =
        progressCount === 0
          ? 0
          : Number((progressCount / requirementValue).toFixed(2)) * 100;

      if (completed) {
        setOpen(true);
        setModalState({ title, imgUrl, requirementValue, progressCount });
        return;
      }

      toast({
        className: cn("bottom-4 right-0 fixed max-w-[350px] mr-3 z-[100]"),
        title: toastTitle,
        description: (
          <main className="flex w-full flex-col gap-3 space-y-1 text-xs">
            <aside className="flex items-center gap-3">
              <Avatar className="h-12 w-12 shadow-neo-thin">
                <AvatarImage src={imgUrl} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h3 className="text-base font-bold">
                <span>{achievementTitle}</span>
                <span> 획득까지 앞으로 </span>
                <span className="text-neoRed">{progressCount}회!</span>
              </h3>
            </aside>
            <Progress
              value={completed ? 100 : percentage}
              background="blue"
              className="w-full grow"
            />
          </main>
        ),
        variant: "achievement",
      });
    }

    if (message) getAchievementTitle(message);
  }, [message]);

  return (
    <WebSocketContext.Provider value={null}>
      {children}
      {open && (
        <AchievementModal isOpen={open} setOpen={setOpen} state={modalState} />
      )}
    </WebSocketContext.Provider>
  );
};
