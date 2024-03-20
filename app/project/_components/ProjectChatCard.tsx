import React from "react";

import MessageContainer from "@/app/chat/[id]/_components/MessageContainer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_common/shadcn/ui/card";

interface ChatCardProps {
  chatRoomId: string;
}

function ProjectChatCard(props: ChatCardProps) {
  const { chatRoomId } = props;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b border-black py-4">
        <CardTitle className="text-base">📍 맥심플랜트 이태원점</CardTitle>
      </CardHeader>
      <CardContent className="relative flex h-[550px] w-[330px] flex-col p-0 px-0 sm:w-[450px]">
        <MessageContainer chatRoomId={chatRoomId} />
      </CardContent>
    </Card>
  );
}

export default ProjectChatCard;
