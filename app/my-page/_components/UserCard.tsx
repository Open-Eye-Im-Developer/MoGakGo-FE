import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

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
    <div className="align-center flex items-center gap-4 rounded-md border-2 border-black p-3 shadow-neo-thin dark:border-white">
      <Avatar className="h-12 w-12">
        <AvatarImage src={data.avatarUrl} />
        <AvatarFallback>{data.username.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex grow flex-col justify-center space-y-1">
        <div className="flex items-center gap-2 text-sm">{data.username}</div>
        <div className="text-xs">{dayjs(data.createdAt).fromNow()}</div>
      </div>
      <LikeCancelButton id={data.receiverId} />
    </div>
  );
}

export default UserCard;
