"use client";

import React from "react";
import Image from "next/image";
import { IconExclamationCircle } from "@tabler/icons-react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import "@/app/project/_styles/card.css";
import { WANTED_JOB_LABELS } from "@/app/_common/constants/wantedJob";

function ProfileCard() {
  const { user } = useAuthStore();

  if (!user)
    return (
      <div className="flex gap-2 text-red-500">
        <IconExclamationCircle />
        <p>유저 정보를 찾을 수 없습니다.</p>
      </div>
    );

  return (
    <section className="w-full">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative rounded-xl">
          <Image
            src={user.avatarUrl}
            alt="프로필 이미지"
            width={150}
            height={150}
            className="rounded-full border-2 border-black shadow-neo"
          />
        </div>

        <div className="flex flex-col items-center gap-1 p-1">
          <h1 className="text-xl font-bold">{user.username}</h1>
          <h3 className="text-xs text-[#F76A6A]">모각코도 한걸음부터</h3>
        </div>

        <section className="space-y-2">
          <div className="grid grid-cols-3 gap-1">
            {user.developLanguages?.map((language, index) => (
              <Badge key={index} className="flex w-full justify-center">
                {language}
              </Badge>
            ))}
          </div>
          <div className="flex flex-row flex-wrap place-content-center gap-1">
            {user.wantedJobs?.map((job, index) => (
              <Badge
                key={index}
                className="flex w-fit justify-center text-center"
              >
                {WANTED_JOB_LABELS[job]}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProfileCard;
