import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import { Like } from "@/app/_common/types/profile";

import "dayjs/locale/ko";
import LikeCancelButton from "./LikeCancelButton";

interface CardProps {
  data: Like;
}

dayjs.extend(relativeTime);
dayjs.locale("ko");

function UserCard(props: CardProps) {
  const { data } = props;

  return (
    <div className="align-center flex items-center gap-4 rounded-md bg-white p-3 dark:bg-gray-900">
      <div className="h-12 w-12 rounded-full">
        <Image
          src={data.avatarUrl}
          alt={`${data.username}'s avatar`}
          width={48}
          height={48}
        />
      </div>
      <div className="flex grow flex-col justify-center space-y-2">
        <div className="text-s flex items-center gap-2">{data.username}</div>
        <div className="text-xs">{dayjs(data.createdAt).fromNow()}</div>
      </div>
      <LikeCancelButton id={data.receiverId} />
    </div>
  );
}

export default UserCard;
