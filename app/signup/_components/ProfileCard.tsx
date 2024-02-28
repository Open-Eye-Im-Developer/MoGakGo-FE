"use client";

import React from "react";
import Image from "next/image";
import { IconMoodPuzzled } from "@tabler/icons-react";

import { cn } from "@/app/_common/shadcn/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_common/shadcn/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/app/_common/shadcn/ui/card";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import "@/app/project/_styles/card.css";

const badgeList = ["조용한", "수다스러운이이", "각자도생"];

function ProfileCard() {
  return (
    <Card className={cn(`inset-0 left-0 top-0  border-none shadow-md`)}>
      <CardHeader className="px-5 pt-4">
        <CardDescription className="flex justify-between text-lg font-bold text-[#a2a2a2]">
          <span className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger>
                <IconMoodPuzzled />
              </PopoverTrigger>
              <PopoverContent className="max-w-[130px]">
                <h1 className="mb-2 text-sm font-bold">🏷️ 분위기 태그</h1>
                {badgeList.map(badge => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </PopoverContent>
            </Popover>
          </span>
          <span className="flex items-center">@zentechie7</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <div className="relative rounded-xl">
            <Image
              src="/images/profileImage.jpg"
              alt="프로필 이미지"
              width={150}
              height={150}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col items-center gap-[6px]">
            <div className="flex flex-col items-center gap-1 p-1">
              <h1 className="text-xl font-bold">Coggie</h1>
              <h3 className="text-xs text-[#F76A6A]">응애 개발자</h3>
            </div>
            <p className="text-[#868686]">나도 잘 하고 싶어요.</p>
            <div className="flex flex-wrap items-center justify-center gap-1">
              <Badge>Frontend</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
