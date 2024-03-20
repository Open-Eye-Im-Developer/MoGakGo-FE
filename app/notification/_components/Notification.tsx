import React from "react";
import { useRouter } from "next/navigation";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import { cn } from "@/app/_common/shadcn/utils";

import Icon from "@/app/_common/components/Icon";

import { NotificationTitle, NotificationType } from "../_types/notification";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface NotificationProps {
  notification: NotificationType;
}

function Notification({ notification }: NotificationProps) {
  const router = useRouter();
  const { tag, message, data, createdAt } = notification;

  const isToday =
    dayjs(createdAt).format("YYYY-MM-DD") ===
    dayjs(new Date()).format("YYYY-MM-DD");

  const redirectPaths: { [key in string]: string } = {
    ACHIEVEMENT: "/my-page",
    MATCHING_SUCCESSED: isToday ? "/project" : "",
    REVIEW_REQUEST: `/review?receiverId=${data?.receiverId}&projectId=${data?.projectId}`,
  };

  const handleClickNotificationRedirect = () => {
    const path = redirectPaths[tag];
    if (path) {
      router.push(path);
    }
  };

  return (
    <div
      className="m-2 flex cursor-pointer justify-between border-b p-2 px-3"
      onClick={handleClickNotificationRedirect}
    >
      <div>
        <div className="flex gap-3">
          <Icon
            id={NotificationTitle[tag].image}
            size={25}
            className={NotificationTitle[tag].color}
          />
          <span className="text-sm text-gray-400">
            {NotificationTitle[tag].message}
          </span>
        </div>
        <p className="pl-9">{message}</p>
      </div>
      <div className="relative float-right min-w-fit">
        <time className="text-center text-sm text-gray-400">
          {dayjs(createdAt).fromNow()}
        </time>
        <Icon
          id="chevron-right"
          size={15}
          className={cn(
            "absolute bottom-1 right-0 text-neoBlue",
            !redirectPaths[tag] && "hidden",
          )}
        />
      </div>
    </div>
  );
}
export default Notification;
