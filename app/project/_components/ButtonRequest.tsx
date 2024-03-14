"use client";

import React from "react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { Button } from "@/app/_common/shadcn/ui/button";

import useSendRequestMutation from "../_hooks/useSendRequestMutation";

interface ButtonReuqestProps {
  projectId: number;
}

function ButtonRequest(props: ButtonReuqestProps) {
  const { projectId } = props;
  const { toast } = useToast();
  const { user } = useAuthStore();
  const { createSendRequest } = useSendRequestMutation(user?.id, projectId);

  const handleRequest = async () => {
    createSendRequest();

    if (!user) {
      return toast({
        title: "요청에 실패했습니다.",
        description: "유저 정보를 찾을 수 없습니다.",
        variant: "destructive",
      });
    }
  };

  return <Button onClick={handleRequest}>요청</Button>;
}

export default ButtonRequest;
