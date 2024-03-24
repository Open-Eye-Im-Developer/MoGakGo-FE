import React from "react";
import Link from "next/link";

import InfoPopover from "@/app/project/_components/InfoPopover";
import ButtonRotate from "@/app/project/_components/ButtonRotate";
import ButtonLike from "@/app/project/_components/ButtonLike";
import { useQueryAchievements } from "@/app/achievements/_hooks/useQueryAchievements";
import useToggleLikeProfile from "@/app/(map)/_api/useToggleLikeProfile";

import { toast } from "../utils/toast";
import { Profile } from "../types/profile";
import { useAuthStore } from "../store/useAuthStore";
import { cn } from "../shadcn/utils";
import { YProgress } from "../shadcn/ui/y-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../shadcn/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import Icon from "./Icon";

interface ProfileCardProps {
  profile: Profile;
  isBehind: boolean;
  onRotate?: () => void;
}

function ProfileCard(props: ProfileCardProps) {
  const {
    profile: {
      response: {
        id: receiverId,
        username,
        githubId,
        avatarUrl,
        githubUrl,
        bio,
        jandiRate,
        developLanguages,
        wantedJobs,
      },
      requestYn: isAlreadyLiked,
    },
    isBehind,
    onRotate,
  } = props;

  const { user } = useAuthStore();
  const { toggleLikeProfile, isLiked } = useToggleLikeProfile();
  const { myCurrentAchievement } = useQueryAchievements();
  const isPublic = user === null;
  const blurEffect = isPublic ? "blur-sm pointer-events-none" : "";
  const handleToggleButton = () => {
    if (!user) {
      toast.info("로그인 후 찜하기를 할 수 있어요!");
      return;
    }

    toggleLikeProfile({
      isLiked: isLiked ?? isAlreadyLiked!,
      likeInfo: { senderId: user.id, receiverId },
    });
  };

  return (
    <Card
      className={cn(
        "relative flex h-full w-full flex-col",
        isBehind
          ? "absolute inset-0 left-0 top-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
          : "",
      )}
    >
      <CardHeader className={cn("px-4 py-3", blurEffect)}>
        <CardDescription className="flex items-center justify-between text-lg font-bold text-black">
          {isBehind && onRotate && <ButtonRotate onRotate={onRotate} />}
          <Link href={githubUrl} target="_blank">
            @{githubId}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          "flex grow flex-col items-center gap-8 px-3 py-2",
          blurEffect,
        )}
      >
        <div className="flex w-full grow flex-col gap-3">
          <div className="flex w-full justify-between sm:justify-center">
            <div className="relative ml-2 rounded-full">
              <Avatar className="h-52 w-52 bg-[#ffffff]">
                <AvatarImage src={avatarUrl} alt="profile" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex gap-2">
              <div className="flex h-full items-end">
                <Icon id="jandi" className="mb-6 h-6 w-6" />
              </div>
              <div className="flex flex-col gap-2">
                <YProgress value={jandiRate} background="green" />
                <span className="text-xs">
                  {jandiRate && jandiRate < 0 ? "NaN" : jandiRate}%
                </span>
              </div>
            </div>
          </div>
          <div className="flex grow flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1 p-1">
              <h1 className="text-2xl font-bold">
                <span className="relative text-black dark:text-white">
                  {username}
                </span>
              </h1>
              <h3 className="mt-3 text-xs font-bold text-[#F76A6A]">
                {myCurrentAchievement?.title ?? "칭호가 없습니다."}
              </h3>
            </div>
            <p className="line-clamp-3 w-40 grow overflow-hidden text-center text-sm">
              {bio ?? "소개문구가 없습니다."}
            </p>
          </div>
          <div className="mb-3 flex items-center justify-center gap-2">
            <InfoPopover type="INTEREST" infoList={wantedJobs} />
            <InfoPopover type="LANG" infoList={developLanguages} />
          </div>
        </div>
      </CardContent>
      {!isBehind && (
        <CardFooter className="flex justify-end">
          <ButtonLike
            onClick={handleToggleButton}
            isLiked={isLiked ?? isAlreadyLiked!}
          />
        </CardFooter>
      )}
    </Card>
  );
}

export default ProfileCard;
