import { cn } from "@/app/_common/shadcn/utils";
import React from "react";

interface ChatBoxProps {
  direction: "flex-row-reverse" | "flex-row";
  align: "self-end" | "self-start";
  time: string;
  content: string;
}

function ChatBox(props: ChatBoxProps) {
  const { direction, align, time, content } = props;
  return (
    <div className={cn("flex items-end gap-2", align, direction)}>
      <p className="font-thin text-[#9F9F9F]">{time}</p>
      <div className="max-w-32 rounded-lg bg-[#000] p-3 text-[#fff] sm:max-w-52">
        {content}
      </div>
    </div>
  );
}

export default ChatBox;
