"use client";

import React, { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

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
  const { data: userData, isFetched } = useQueryUserData();
  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const client = useRef<Client | null>(null);

  const connect = () => {
    const currentUserAccessToken = localStorage.getItem("accessToken");
    client.current = new Client({
      brokerURL: process.env.NEXT_PUBLIC_ACHIEVEMENT_SOCKET_URL,
      connectHeaders: {
        Authorization: `Bearer ${currentUserAccessToken}`,
      },
      reconnectDelay: 5000,
    });

    client.current.onConnect = () => {
      client.current?.subscribe(
        `/topic/achievement/${userData?.id}`,
        async data => {
          const { achievementId, completed, progressCount }: WebSocketMessage =
            JSON.parse(data.body);
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
        },
      );
    };

    client.current.onWebSocketError = e => {
      console.error(e);
    };

    client.current.onWebSocketClose = e => {
      console.error(e);
    };

    client.current.activate();
  };

  const disconnect = () => {
    client.current?.deactivate();
  };

  useEffect(() => {
    if (isFetched) {
      connect();
    }

    return () => {
      disconnect();
    };
  }, [isFetched]);

  return (
    <WebSocketContext.Provider value={null}>
      {children}
      {open && (
        <AchievementModal isOpen={open} setOpen={setOpen} state={modalState} />
      )}
    </WebSocketContext.Provider>
  );
};
