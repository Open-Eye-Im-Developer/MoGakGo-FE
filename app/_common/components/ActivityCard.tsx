import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import Profile from "@/app/chat/[id]/_components/Profile";

interface ActivityCardProps {
  name: string;
  profile_image: string;
  detail: string;
  created_at: string;
}

function ActicityCard({
  name,
  profile_image,
  detail,
  created_at,
}: ActivityCardProps) {
  dayjs.extend(relativeTime);

  return (
    <div className="m-2 flex cursor-pointer justify-between border-b p-2 px-3">
      <Profile username={name} avatarUrl={profile_image}>
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
export default ActicityCard;
