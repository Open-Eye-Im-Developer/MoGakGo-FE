import React from "react";

import { Input } from "@/app/_common/shadcn/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_common/shadcn/ui/card";
import { Button } from "@/app/_common/shadcn/ui/button";

import ChatBox from "./ChatBox";

interface ChatCardProps {
  messages: {
    time: string;
    content: string;
  }[];
}

function ProjectChatCard(props: ChatCardProps) {
  const { messages } = props;

  return (
    <Card className="glass-morphism overflow-hidden border-none shadow-md">
      <CardHeader className="border-b border-black py-4">
        <CardTitle className="text-base">📍 맥심플랜트 이태원점</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col p-0 px-0">
        <section className="flex max-h-96 flex-col gap-5 overflow-y-scroll px-5 py-2">
          {messages.map(({ time, content }, idx) => {
            if (idx % 2 === 0) {
              return (
                <ChatBox
                  key={content}
                  direction="flex-row"
                  align="self-end"
                  time={time}
                  content={content}
                />
              );
            } else {
              return (
                <ChatBox
                  key={content}
                  direction="flex-row-reverse"
                  align="self-start"
                  time={time}
                  content={content}
                />
              );
            }
          })}
        </section>
        <div className="flex h-24 grow items-center gap-2 border-t border-black px-5">
          <Input type="text" placeholder="대화를 입력하세요." />
          <Button>전송</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectChatCard;
