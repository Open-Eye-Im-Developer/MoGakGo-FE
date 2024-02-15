"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_common/shadcn/ui/tabs";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import ChatCard from "./ChatCard";

function CardContainer() {
  return (
    <Tabs defaultValue="card" className="h-[550px] w-[330px] sm:w-[450px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="card">Card</TabsTrigger>
        <TabsTrigger value="chat">Chat</TabsTrigger>
      </TabsList>
      <TabsContent value="card" className="group h-full [perspective:1000px]">
        <div
          className={`relative h-full transition-all duration-500 [transform-style:preserve-3d] `}
        >
          <CardFront />
          <CardBack />
        </div>
      </TabsContent>
      <TabsContent value="chat" className="h-full">
        <ChatCard />
      </TabsContent>
    </Tabs>
  );
}

export default CardContainer;
