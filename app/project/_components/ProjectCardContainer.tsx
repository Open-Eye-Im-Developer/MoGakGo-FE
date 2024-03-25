"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/app/_common/shadcn/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_common/shadcn/ui/tabs";

import { Project } from "@/app/_common/types/project";

import { RequestList } from "../_types/type";
import useGetRequestListQuery from "../_hooks/useGetRequestListQuery";
import useGetChatRoomIdQuery from "../_hooks/useGetChatRoomIdQuery";
import useFlip from "../_hooks/useFlip";
import ProjectChatCard from "./ProjectChatCard";
import ProjectCardFront from "./ProjectCardFront";
import ProjectCardBack from "./ProjectCardBack";

interface Props {
  project: Project;
  matchingId?: number;
}

function ProjectCardContainer({ project, matchingId }: Props) {
  const { flipped, handleFlip } = useFlip();
  const [requestList, setRequestList] = useState<RequestList[]>([]);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const [isAccepted, setIsAccepted] = useState(
    project.projectStatus === "PENDING" ||
      project.projectStatus === "CANCELED" ||
      project.projectStatus === "FINISHED"
      ? false
      : true,
  );

  const ref = useRef(null);
  const { data } = useGetRequestListQuery(
    project.projectId,
    cursorId,
    project.creator.id,
  );
  const { chatRoomId } = useGetChatRoomIdQuery(
    project.projectId,
    matchingId,
    isAccepted,
  );

  const handleMoreButton = () => {
    if (Array.isArray(data)) {
      const lastItem = data[data.length - 1];
      if (lastItem && cursorId !== lastItem) {
        setCursorId(lastItem.id);
      }
    }
  };

  const handleAcceptButton = (isError: boolean) => {
    if (isError) return;
    setIsAccepted(true);
  };

  useEffect(() => {
    if (!data || "timestamp" in data) return;
    if (data) {
      setRequestList(prev => {
        const prevRequestList = prev as RequestList[];
        const currentRequestList = data.data;
        const updatedRequestList = [...prevRequestList, ...currentRequestList];
        return updatedRequestList;
      });
    }
  }, [data]);

  return (
    <Tabs defaultValue="card" className="h-[600px] w-[330px] sm:w-[450px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="card">Card</TabsTrigger>
        <TabsTrigger
          value="chat"
          disabled={
            !isAccepted ||
            project.projectStatus === "CANCELED" ||
            project.projectStatus === "FINISHED"
          }
        >
          Chat
        </TabsTrigger>
      </TabsList>
      <TabsContent value="card" className="group h-full [perspective:1000px]">
        <div
          className={cn(
            `relative h-full transition-all duration-500 [transform-style:preserve-3d]`,
            `${flipped ? "[transform:rotateY(180deg)]" : ""}`,
          )}
        >
          <ProjectCardFront
            onRotate={handleFlip}
            project={project}
            matchingId={matchingId}
            isAccepted={isAccepted}
          />
          <ProjectCardBack
            onRotate={handleFlip}
            requestList={requestList}
            projectStatus={project.projectStatus}
            handleMoreButton={handleMoreButton}
            handleAcceptButton={handleAcceptButton}
            isAccepted={isAccepted}
            ref={ref}
          />
        </div>
      </TabsContent>
      <TabsContent value="chat" className="h-full">
        {chatRoomId && <ProjectChatCard chatRoomId={chatRoomId} />}
      </TabsContent>
    </Tabs>
  );
}

export default ProjectCardContainer;
