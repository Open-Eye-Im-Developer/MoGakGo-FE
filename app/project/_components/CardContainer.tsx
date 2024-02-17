"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_common/shadcn/ui/tabs";

import useFlip from "../_hooks/useFlip";
import ChatCard from "./ChatCard";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const messages = [
  {
    time: "오후 7:27",
    content: "안녕하세요?",
  },
  {
    time: "오후 7:29",
    content: "아 넵 안녕하세요. 미리 와 계시나요?",
  },
  {
    time: "오후 7:29",
    content: "저는 앞입니다!",
  },
  {
    time: "오후 7:30",
    content: "어, 저도 카페에 들어와있는데",
  },
  {
    time: "오후 7:30",
    content: "무슨 색 옷 입고 계시나요?",
  },
  {
    time: "오후 7:30",
    content: "오잉? ㅋㅋㅋ 저 노란색이요!",
  },
  {
    time: "오후 7:30",
    content: "오잉? ㅋㅋㅋ 저 노란색이요!",
  },
  {
    time: "오후 7:30",
    content: "오잉? ㅋㅋㅋ 저 노란색이요!",
  },
  {
    time: "오후 7:30",
    content: "오잉? ㅋㅋㅋ 저 노란색이요!",
  },
  {
    time: "오후 7:30",
    content: "오잉? ㅋㅋㅋ 저 노란색이요!",
  },
  {
    time: "오후 7:30",
    content: "오잉? ㅋㅋㅋ 저 노란색이요!",
  },
];

function CardContainer() {
  const { flipped, handleFlip } = useFlip();

  return (
    <Tabs defaultValue="card" className="h-[550px] w-[330px] sm:w-[450px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="card">Card</TabsTrigger>
        <TabsTrigger value="chat">Chat</TabsTrigger>
      </TabsList>
      <TabsContent value="card" className="group h-full [perspective:1000px]">
        <div
          className={`relative h-full transition-all duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <CardFront onRotate={handleFlip} />
          <CardBack onRotate={handleFlip} />
        </div>
      </TabsContent>
      <TabsContent value="chat" className="h-full">
        <ChatCard messages={messages} />
      </TabsContent>
    </Tabs>
  );
}

export default CardContainer;
