import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import Profile from "@/app/chat/[id]/_components/Profile";

import { NotificationType } from "../_types/notification";

interface NotificationProps {
  notification: NotificationType;
}

function Notification({ notification }: NotificationProps) {
  dayjs.extend(relativeTime);

  const { sender, data } = notification;
  const { name, profile_image } = sender;
  const { detail, created_at } = data;

  return (
    <div className="m-2 flex cursor-pointer justify-between border-b p-2 px-3">
      <Profile name={name} imageUrl={profile_image}>
        <div>
          <div className="font-medium">{name}</div>
          <span className="text-gray-500">{detail}</span>
        </div>
      </Profile>
      <div className="min-w-fit text-center text-sm text-gray-500">
        {dayjs(created_at).fromNow()}
      </div>
    </div>
  );
}
export default Notification;
