"use client";

import React from "react";
import Image from "next/image";
import { IconMoodPuzzled } from "@tabler/icons-react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { cn } from "@/app/_common/shadcn/utils";
import { Progress } from "@/app/_common/shadcn/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_common/shadcn/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/_common/shadcn/ui/card";
import { Badge as Tag } from "@/app/_common/shadcn/ui/badge";

import { Project } from "@/app/_common/types/project";

import formatMeetingTime from "../_utils/formatMeetingTime";
import ProjectRemoveDialog from "./ProjectRemoveDialog";
import ButtonRotate from "./ButtonRotate";
import ButtonRequest from "./ButtonRequest";
import "../_styles/card.css";

interface CardFrontProps {
  initialRotate?: boolean;
  onRotate: () => void;
  project: Project;
  matchingId: number | null;
}

function ProjectCardFront(props: CardFrontProps) {
  // TODO: 요청이 있을 경우 삭제하지 못하는 로직 추가하기
  // TODO: 사용자(제안자, 요청자)타입에 따라 Footer의 버튼 조건부 렌더링 추가하기(매칭 취소, 카드 취소, 요청)
  const {
    initialRotate,
    onRotate,
    project: {
      creator: {
        id,
        githubId,
        avatarUrl,
        username,
        achievementTitle,
        bio,
        wantedJobs,
        jandiRate,
      },
      projectTags,
      projectId,
      meetingInfo: { meetDetail, meetEndTime, meetStartTime },
    },
    matchingId,
  } = props;
  const { user } = useAuthStore();

  return (
    <Card
      className={cn(
        `glass-morphism absolute inset-0 left-0 top-0 border-none shadow-md [backface-visibility:hidden]`,
        initialRotate ? "[transform:rotateY(180deg)]" : "",
      )}
    >
      <CardHeader className="px-5 pt-4">
        <CardDescription className="flex justify-between text-lg font-bold text-black">
          <span className="flex items-center">
            <ButtonRotate
              isDisabled={!user || user.id !== id}
              onRotate={onRotate}
            />
            <Popover>
              <PopoverTrigger className="rounded-md p-2 hover:bg-[#5454543e]">
                <IconMoodPuzzled />
              </PopoverTrigger>
              <PopoverContent className="max-w-[130px]">
                <h1 className="mb-2 text-sm font-bold">🏷️ 분위기 태그</h1>
                {projectTags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </PopoverContent>
            </Popover>
          </span>
          <span className="flex items-center">@{githubId}</span>
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
              <h3 className="text-xs text-[#F76A6A]">{achievementTitle}</h3>
            </div>
            <p className="text-[#868686]">{bio}</p>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {wantedJobs.map(job => (
                <Tag key={job}>{job}</Tag>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image src="/images/grass.png" alt="잔디력" width={50} height={50} />
          <div className="mr-10 w-40">
            <Progress value={jandiRate} />
            <span className="text-xs text-[#868686]">{jandiRate * 100}%</span>
          </div>
        </div>
      </CardContent>
      {!initialRotate && (
        <CardFooter className="flex items-center justify-between">
          <div>
            <p className="font-bold">📍 {meetDetail}</p>
            <p>🕡 {formatMeetingTime(meetStartTime, meetEndTime)}</p>
          </div>
          {user && user.id !== id ? (
            <ButtonRequest projectId={projectId} />
          ) : (
            <ProjectRemoveDialog
              projectId={projectId}
              isMatchedProject={matchingId ? true : false}
            />
          )}
        </CardFooter>
      )}
    </Card>
  );
}

export default ProjectCardFront;
