import dayjs from "dayjs";

import { MessageType } from "../_types/message";
import { cn } from "../../../_common/shadcn/utils";

interface MessageProps {
  message: MessageType;
}

function Message({ message }: MessageProps) {
  const { id, content, SenderId, createdAt } = message;

  const MYID = "1";

  return (
    <>
      <div
        key={id}
        className={cn("flex", MYID === SenderId && "flex-row-reverse")}
      >
        <div
          className={cn(
            "m-2 w-fit rounded-lg bg-slate-300 p-3",
            MYID === SenderId ? "rounded-tr-none" : "rounded-tl-none",
          )}
        >
          {content}
        </div>
        <div className="flex flex-col justify-end py-2 text-xs">
          {dayjs(createdAt).format("HH:MM")}
        </div>
      </div>
    </>
  );
}

export default Message;
