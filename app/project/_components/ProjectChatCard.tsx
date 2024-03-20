import React from "react";

import ProjectInfo from "@/app/chat/[id]/_components/ProjectInfo";
import MessageContainer from "@/app/chat/[id]/_components/MessageContainer";
import { Card, CardContent, CardHeader } from "@/app/_common/shadcn/ui/card";

interface ChatCardProps {
  chatRoomId: string;
}

function ProjectChatCard(props: ChatCardProps) {
  const { chatRoomId } = props;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b border-black p-0">
        <ProjectInfo chatRoomId={chatRoomId} />
      </CardHeader>
      <CardContent className="relative flex h-[550px] w-[330px] flex-col p-0 px-0 sm:w-[450px]">
        <MessageContainer chatRoomId={chatRoomId} />
      </CardContent>
    </Card>
  );
}

export default ProjectChatCard;
