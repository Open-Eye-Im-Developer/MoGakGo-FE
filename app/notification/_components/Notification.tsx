import React from "react";
import { useRouter } from "next/navigation";
import "dayjs/locale/ko";
import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import Arrow from "@/public/images/redirect-arrow.svg";
import { cn } from "@/app/_common/shadcn/utils";

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
        <div className="flex gap-1">
          <Image
            src={NotificationTitle[tag].image}
            alt={`${tag} image`}
            width={20}
            height={20}
          />
          <span className="text-sm text-gray-400">
            {NotificationTitle[tag].message}
          </span>
        </div>
        <p className="pl-6">{message}</p>
      </div>
      <div className="relative float-right">
        <time className="min-w-fit text-center text-sm text-gray-400">
          {dayjs(createdAt).fromNow()}
        </time>
        <Image
          src={Arrow}
          width={24}
          height={12}
          alt="redirect button"
          className={cn("absolute right-0", !redirectPaths[tag] && "hidden")}
        />
      </div>
    </div>
  );
}
export default Notification;
