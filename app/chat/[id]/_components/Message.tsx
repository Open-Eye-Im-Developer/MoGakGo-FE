import dayjs from "dayjs";

import { cn } from "../../../_common/shadcn/utils";

interface MessageProps {
  message: CustomMessageType;
  userId: number;
}

function Message({ message, userId }: MessageProps) {
  const { id, message: content, senderId, createdAt, isTime } = message;

  return (
    <>
      <div
        key={id}
        className={cn("flex", userId === senderId && "flex-row-reverse")}
      >
        <div
          className={cn(
            "m-2 w-fit rounded-lg bg-slate-300 p-3",
            userId === senderId ? "rounded-tr-none" : "rounded-tl-none",
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
