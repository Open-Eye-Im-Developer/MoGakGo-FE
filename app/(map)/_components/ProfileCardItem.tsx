"use client";

import React from "react";
import Link from "next/link";

import InfoPopover from "@/app/project/_components/InfoPopover";
import ButtonLike from "@/app/project/_components/ButtonLike";
import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { YProgress } from "@/app/_common/shadcn/ui/y-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/_common/shadcn/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

import Icon from "@/app/_common/components/Icon";

import { Profile } from "@/app/_common/types/profile";

import useToggleLikeProfile from "../_api/useToggleLikeProfile";

interface Props {
  profile: Profile;
}

function ProfileCardItem({ profile }: Props) {
  const {
    response: {
      id: receiverId,
      username,
      githubId,
      avatarUrl,
      githubUrl,
      bio,
      jandiRate,
      achievementId,
      developLanguages,
      wantedJobs,
    },
    requestYn: isAlreadyLiked,
  } = profile;
  const { user } = useAuthStore();
  const { toggleLikeProfile, isLiked } = useToggleLikeProfile();

  const handleToggleButton = () => {
    if (!user) return;
    toggleLikeProfile({
      isLiked: isLiked ?? isAlreadyLiked!,
      likeInfo: { senderId: user.id, receiverId },
    });
  };

  return (
    <div className="h-[600px] w-[330px] sm:w-[450px]">
      <div className="h-full">
        <div className="relative h-full">
          <Card>
            <CardHeader className="px-5 pt-4">
              <CardDescription className="flex justify-end text-lg font-bold text-black">
                <Link href={githubUrl} target="_blank">
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
                        {jandiRate * 100}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col items-center gap-1 p-1">
                    <h1 className="text-2xl font-bold">{username}</h1>
                    <h3 className="text-xs text-[#F76A6A]">{achievementId}</h3>
                  </div>
                  <p className="w-60 overflow-hidden text-center text-sm">
                    {bio}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <InfoPopover type="INTEREST" infoList={wantedJobs} />
                  <InfoPopover type="LANG" infoList={developLanguages} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <ButtonLike
                onClick={handleToggleButton}
                isLiked={isLiked ?? isAlreadyLiked!}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardItem;
