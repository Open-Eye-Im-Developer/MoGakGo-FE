import dayjs from "dayjs";

import { CustomMessageType } from "../_types/message";
import { cn } from "../../../_common/shadcn/utils";

interface MessageProps {
  message: CustomMessageType;
}

function Message({ message }: MessageProps) {
  const { id, content, senderId, createdAt, isTime } = message;

  const MYID = "1";

  return (
    <>
      <div
        key={id}
        className={cn("flex", MYID === senderId && "flex-row-reverse")}
      >
        <div
          className={cn(
            "m-2 w-fit rounded-lg bg-slate-300 p-3",
            MYID === senderId ? "rounded-tr-none" : "rounded-tl-none",
          )}
        >
          {content}
        </div>
        <time
          className={cn(
            "flex flex-col justify-end py-2 text-xs",
            !isTime && "hidden",
          )}
        >
          {dayjs(createdAt).format("HH:mm")}
        </time>
      </div>
    </>
  );
}

export default Message;
