import Link from "next/link";

import { useQueryAchievements } from "@/app/achievements/_hooks/useQueryAchievements";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

import Icon from "@/app/_common/components/Icon";

import { useQueryUserData } from "../_hooks/useQueryUserData";

function MyAchievements() {
  const { data: userData } = useQueryUserData();
  const { myCurrentAchievement } = useQueryAchievements(userData?.id);

  return (
    <div className="flex w-full flex-col gap-4">
      <Link
        className="text-md flex items-center gap-1 font-bold"
        href="/achievements"
      >
        나의 업적
        <Icon id="chevron-right" size={26} />
      </Link>
      <div className="flex justify-center">
        <Avatar className="h-16 w-16">
          <AvatarImage
            src={myCurrentAchievement?.imgUrl}
            alt={myCurrentAchievement?.title}
          />
          <AvatarFallback>
            {myCurrentAchievement?.title.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default MyAchievements;
