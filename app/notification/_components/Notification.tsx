import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

import { NotificationType } from "../_types/notification";

interface Props {
  notification: NotificationType;
}

function Notification({ notification }: Props) {
  dayjs.extend(relativeTime);
  const { sender, data } = notification;
  const { name, profile_image } = sender;
  const { detail, created_at } = data;
  return (
    <div className="m-2 flex cursor-pointer justify-between border-b p-2 px-3">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src={profile_image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{name}</div>
          <span className="text-gray-500">{detail}</span>
        </div>
      </div>
      <div className="min-w-fit text-center text-sm text-gray-500">
        <div>{dayjs(created_at).fromNow()}</div>
      </div>
    </div>
  );
}
export default Notification;
