"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import ButtonLike from "@/app/project/_components/ButtonLike";
import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { Progress } from "@/app/_common/shadcn/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/_common/shadcn/ui/card";
import { Badge as Tag } from "@/app/_common/shadcn/ui/badge";

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
      achievementTitle,
      developLanguages,
      wantedJobs,
    },
    requestYn,
  } = profile;
  const { user } = useAuthStore();
  const { toggleLikeProfile, isLiked } = useToggleLikeProfile();

  const handleToggleButton = () => {
    if (!user) return;
    toggleLikeProfile({
      isLiked: isLiked ?? requestYn,
      likeInfo: { senderId: user.id, receiverId },
    });
  };

  return (
    <div className="h-[550px] w-[330px] sm:w-[450px]">
      <div className="h-full">
        <div className="relative h-full">
          <Card className="border-none shadow-md">
            <CardHeader className="px-5 pt-4">
              <CardDescription className="flex justify-end text-lg font-bold text-black">
                <Link href={githubUrl} target="_blank">
                  @{githubId}
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center gap-5">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={avatarUrl}
                    alt="프로필 이미지"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex flex-col items-center gap-[6px]">
                  <div className="flex flex-col items-center gap-1 p-1">
                    <h1 className="text-xl font-bold">{username}</h1>
                    <h3 className="text-xs text-[#F76A6A]">
                      {achievementTitle}
                    </h3>
                  </div>
                  <p className="text-[#868686]">{bio}</p>
                  <div className="flex flex-wrap items-center justify-center gap-1">
                    {wantedJobs.map(job => (
                      <Tag key={job}>{job}</Tag>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-1">
                    {developLanguages.map(job => (
                      <Tag key={job}>{job}</Tag>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <Image
                  src="/images/grass.png"
                  alt="잔디력"
                  width={50}
                  height={50}
                />
                <div className="mr-10 w-40">
                  <Progress value={jandiRate} />
                  <span className="text-xs text-[#868686]">
                    {jandiRate * 100}%
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <ButtonLike
                onClick={handleToggleButton}
                isLiked={isLiked ?? requestYn}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardItem;
