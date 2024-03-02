"use client";

import { cn } from "@/app/_common/shadcn/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_common/shadcn/ui/tabs";

import { Project } from "@/app/_common/types/project";

import useGetRequestListQuery from "../_hooks/useGetRequestListQuery";
import useFlip from "../_hooks/useFlip";
import TEST_MESSAGES from "../_constants/messages";
import ProjectChatCard from "./ProjectChatCard";
import ProjectCardFront from "./ProjectCardFront";
import ProjectCardBack from "./ProjectCardBack";

interface Props {
  project: Project;
}

function ProjectCardContainer({ project }: Props) {
  const { flipped, handleFlip } = useFlip();
  const { data } = useGetRequestListQuery(85);

  return (
    <Tabs defaultValue="card" className="h-[550px] w-[330px] sm:w-[450px]">
      <TabsList className="glass-morphism grid w-full grid-cols-2">
        <TabsTrigger value="card">Card</TabsTrigger>
        <TabsTrigger value="chat">Chat</TabsTrigger>
      </TabsList>
      <TabsContent value="card" className="group h-full [perspective:1000px]">
        <div
          className={cn(
            `relative h-full transition-all duration-500 [transform-style:preserve-3d]`,
            `${flipped ? "[transform:rotateY(180deg)]" : ""}`,
          )}
        >
          <ProjectCardFront onRotate={handleFlip} project={project} />
          <ProjectCardBack onRotate={handleFlip} requestList={data} />
        </div>
      </TabsContent>
      <TabsContent value="chat" className="h-full">
        <ProjectChatCard messages={TEST_MESSAGES} />
      </TabsContent>
    </Tabs>
  );
}

export default ProjectCardContainer;
