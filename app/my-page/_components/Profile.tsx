import Link from "next/link";

import { SignUpUser } from "@/app/signup/_type/signup";
import { useQueryAchievements } from "@/app/achievements/_hooks/useQueryAchievements";
import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";
import { Button } from "@/app/_common/shadcn/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

import { Achievement } from "@/app/_common/types/user";

import { useQueryUserData } from "../_hooks/useQueryUserData";

const buttonStyle = "h-8 text-xs shadow-neo-thin text-black";

function Profile() {
  const { data } = useQueryUserData();
  const { myAchievement } = useQueryAchievements();

  if (!data) return <ProfileSkeleton />;
  return <ProfileLayout data={data} myAchievement={myAchievement} />;
}

export default Profile;

interface ProfileLayoutProps {
  data: SignUpUser;
  myAchievement?: Achievement | null;
}

export function ProfileLayout(props: ProfileLayoutProps) {
  const { data, myAchievement } = props;

  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div className="flex gap-6">
        <Avatar className="h-28 w-28">
          <AvatarImage src={data.avatarUrl} />
          <AvatarFallback>{data.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-grow flex-col justify-end gap-2">
          <div className="flex flex-col gap-1">
            <div className="text-lg font-bold">{data.username}</div>
            {myAchievement ? (
              <div className="text-xs text-orange-400">
                {myAchievement.title}
              </div>
            ) : null}
          </div>
          <div className="text-xs text-gray-400">
            {!data.bio || data.bio.trim().length === 0
              ? "한 줄 소개를 입력해주세요."
              : data.bio}
          </div>
          <div className="flex gap-2">
            <Link href="/my-page/edit">
              <Button className={buttonStyle}>수정</Button>
            </Link>
            <Link href="/auth-mylocation">
              <Button className={buttonStyle}>위치 인증</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div className="flex gap-6">
        <Avatar className="h-28 w-28">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex flex-grow flex-col justify-end">
          <Skeleton className="h-[28px] w-[100px] rounded-none" />
          <Skeleton className="mt-1 h-[16px] w-[100px] rounded-none" />
          <Skeleton className="mt-2 h-[16px] w-full rounded-none" />
          <Skeleton className="mt-1 h-[16px] w-full rounded-none" />
        </div>
      </div>
    </div>
  );
}
