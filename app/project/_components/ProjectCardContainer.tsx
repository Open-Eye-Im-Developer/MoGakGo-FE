"use client";

import { cn } from "@/app/_common/shadcn/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_common/shadcn/ui/tabs";

import useGetRequestListQuery from "../_hooks/useGetRequestListQuery";
import useFlip from "../_hooks/useFlip";
import TEST_MESSAGES from "../_constants/messages";
import ProjectChatCard from "./ProjectChatCard";
import ProjectCardFront from "./ProjectCardFront";
import ProjectCardBack from "./ProjectCardBack";

// TODO: 제안 카드를 생성한 생성자가 아닌 경우, 제안 카드의 뒷면을 보지 못하도록(flip이 불가하도록) 처리 & 서버에서 프로젝트 id 받아오기
function ProjectCardContainer() {
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
          <ProjectCardFront onRotate={handleFlip} />
          <ProjectCardBack requestList={data} onRotate={handleFlip} />
        </div>
      </TabsContent>
      <TabsContent value="chat" className="h-full">
        <ProjectChatCard messages={TEST_MESSAGES} />
      </TabsContent>
    </Tabs>
  );
}

export default ProjectCardContainer;
