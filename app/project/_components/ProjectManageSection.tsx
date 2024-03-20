"use client";

import React, { useEffect, useRef } from "react";

import { useMatchingStore } from "@/app/_common/store/useMatchingStore";
import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { useToast } from "@/app/_common/shadcn/ui/use-toast";

import useGetCurrentProjectQuery from "../_hooks/useGetCurrentProjectQuery";
import ProjectCreateDialog from "./ProjectCreateDialog";
import ProjectCardContainer from "./ProjectCardContainer";

function ProjectManageSection() {
  const { project, matchingId, isError, error } = useGetCurrentProjectQuery();
  const { setMatchingId } = useMatchingStore();
  const { toast } = useToast();
  const webSocket = useRef<WebSocket | null>(null);
  const { user } = useAuthStore();
  let reconnectInterval: NodeJS.Timeout;
  useEffect(() => {
    if (user) {
      connect(user.id);
    }
    return () => {
      disconnect();
    };
  }, [user]);

  const connect = (userId: number) => {
    webSocket.current = new WebSocket(`ws://localhost:8080/ws/achievement`);
    webSocket.current.onopen = () => {
      console.log("WebSocket is open now.");
      webSocket.current?.send(userId.toString());
      clearInterval(reconnectInterval);
    };

    webSocket.current.onmessage = (event: MessageEvent) => {
      console.log("websocket message received!: ", event.data);
    };

    webSocket.current.onclose = error => {
      reconnectInterval = setInterval(() => reconnect(user!.id), 5000);
      console.log(error);
    };

    webSocket.current.onerror = error => {
      console.log(error);
    };
  };

  const disconnect = () => {
    clearInterval(reconnectInterval);
    webSocket.current?.close();
  };

  const reconnect = (userId: number) => {
    if (webSocket.current?.readyState !== WebSocket.CONNECTING && user) {
      webSocket.current = new WebSocket("ws://localhost:8080/ws/achievement");
      connect(userId);
    }
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "프로젝트 정보를 가져오는 중 오류가 발생했습니다.",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    }
  }, [error, isError]);

  useEffect(() => {
    setMatchingId(matchingId);
  }, [matchingId]);

  return (
    <main className="relative flex h-full w-full flex-col items-center">
      <div className="map-background" />
      <div className="map-background" />
      {!project && (
        <div className="z-50 flex h-[300px] flex-col items-center justify-between rounded-xl border-4 border-dotted p-10 md:h-[550px]">
          <header className="space-y-3 text-center text-[#7b7b7b]">
            <h1 className="text-lg font-bold">생성한 프로젝트가 없어요!</h1>
            <h2 className="text-sm">프로젝트를 새로 생성해주세요.</h2>
          </header>
          <ProjectCreateDialog />
        </div>
      )}
      <div className="z-[50] mt-10">
        {project && <ProjectCardContainer project={project} />}
      </div>
    </main>
  );
}

export default ProjectManageSection;
