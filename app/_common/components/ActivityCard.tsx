import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import Profile from "@/app/chat/[id]/_components/Profile";

interface ActivityCardProps {
  name: string;
  profileImage: string;
  detail: string;
  createdAt: string;
}

function ActivityCard(props: ActivityCardProps) {
  const { name, profileImage, detail, createdAt } = props;

  dayjs.extend(relativeTime);

  return (
    <div className="m-2 flex cursor-pointer justify-between border-b p-2 px-3">
      <Profile username={name} avatarUrl={profileImage}>
        <div>
          <div className="font-medium">{name}</div>
          <span className="text-gray-500">{detail}</span>
        </div>
      </Profile>
      <div className="min-w-fit text-center text-sm text-gray-500">
        {dayjs(createdAt).fromNow()}
      </div>
    </div>
  );
}
export default ActivityCard;
