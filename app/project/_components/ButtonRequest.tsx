"use client";

import React from "react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { Button } from "@/app/_common/shadcn/ui/button";

interface ButtonReuqestProps {
  projectId: number;
}

function ButtonRequest(props: ButtonReuqestProps) {
  const { projectId } = props;
  const { toast } = useToast();
  const { user } = useAuthStore();
  const handleRequest = async () => {
    if (!user) {
      return toast({
        title: "요청에 실패했습니다.",
        description: "유저 정보를 찾을 수 없습니다.",
        variant: "destructive",
      });
    }

    const response = await fetch("/api/project/request/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ senderId: user?.id, projectId: projectId }),
    });

    const { data, status } = await response.json();

    toast({
      title: status === 201 ? "요청이 완료되었습니다." : "요청에 실패했습니다.",
      description:
        status === 201 ? "요청을 수락할 때까지 기다려주세요!" : data.message,
      variant: status === 201 ? "default" : "destructive",
    });
  };

  return <Button onClick={handleRequest}>요청</Button>;
}

export default ButtonRequest;
