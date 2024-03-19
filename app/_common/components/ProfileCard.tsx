import React from "react";
import Link from "next/link";

import { Profile } from "@/app/project/_types/type";
import InfoPopover from "@/app/project/_components/InfoPopover";
import ButtonRotate from "@/app/project/_components/ButtonRotate";

import { cn } from "../shadcn/utils";
import { YProgress } from "../shadcn/ui/y-progress";
import {
  Card,
  CardContent,
  CardDescription,
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
      username,
      githubId,
      avatarUrl,
      githubUrl,
      bio,
      jandiRate,
      achievementTitle,
      developLanguages,
      wantedJobs,
    },
    isBehind,
    onRotate,
  } = props;

  return (
    <Card
      className={cn(
        "h-full w-full border-none shadow-none",
        isBehind
          ? "absolute inset-0 left-0 top-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
          : "",
      )}
    >
      <CardHeader className="px-4 py-3">
        <CardDescription className="flex items-center justify-between text-lg font-bold text-black">
          {isBehind && onRotate && <ButtonRotate onRotate={onRotate} />}
          <Link href={githubUrl} target="_blank" className="text-[#a2a2a2]">
            @{githubId}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8 px-3 py-2">
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full justify-between ">
            <div className="relative ml-2 rounded-full">
              <Avatar className="h-52 w-52">
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
                <span className="text-xs text-[#868686]">
                  {jandiRate !== undefined ? jandiRate * 100 : ""}%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1 p-1">
              <h1 className="text-2xl font-bold">{username}</h1>
              <h3 className="text-xs text-[#F76A6A]">{achievementTitle}</h3>
            </div>
            <p className="w-60 overflow-hidden text-center text-sm">{bio}</p>
          </div>
          <div className="flex flex-col items-center">
            <InfoPopover type="INTEREST" infoList={wantedJobs!} />
            <InfoPopover type="LANG" infoList={developLanguages} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
