"use client";

import React from "react";
import Link from "next/link";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { cn } from "@/app/_common/shadcn/utils";
import { YProgress } from "@/app/_common/shadcn/ui/y-progress";
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
import { Badge } from "@/app/_common/shadcn/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

import Icon from "@/app/_common/components/Icon";

import { Project } from "@/app/_common/types/project";

import formatMeetingTime from "../_utils/formatMeetingTime";
import ProjectRemoveDialog from "./ProjectRemoveDialog";
import InfoPopover from "./InfoPopover";
import ButtonRotate from "./ButtonRotate";
import ButtonRequest from "./ButtonRequest";

import "../_styles/card.css";

interface CardFrontProps {
  initialRotate?: boolean;
  onRotate: () => void;
  project: Project;
  matchingId?: number;
  achievementTitle?: string;
}

function ProjectCardFront(props: CardFrontProps) {
  const {
    initialRotate,
    onRotate,
    project: {
      creator: {
        id,
        githubId,
        avatarUrl,
        githubUrl,
        username,
        bio,
        wantedJobs,
        jandiRate,
        developLanguages,
      },
      projectTags,
      projectId,
      projectStatus,
      meetingInfo: { meetDetail, meetEndTime, meetStartTime },
    },
    matchingId,
    achievementTitle,
  } = props;
  const { user } = useAuthStore();

  return (
    <Card
      className={cn(
        `absolute inset-0 left-0 top-0 flex flex-col [backface-visibility:hidden] `,
        initialRotate ? "[transform:rotateY(180deg)]" : "",
      )}
    >
      <CardHeader className="px-3 pt-2">
        <CardDescription className="flex justify-between text-lg font-bold text-black">
          <span className="flex items-center gap-2">
            <ButtonRotate
              isDisabled={!user || user.id !== id}
              onRotate={onRotate}
            />
            <Popover>
              <PopoverTrigger className="flex h-10 w-[42px] items-center justify-center rounded-md border border-black bg-neoBlue shadow-neo-thin ">
                <Icon id="project-tag" className="h-5 w-5 text-white" />
              </PopoverTrigger>
              <PopoverContent className="max-w-[200px] bg-transparent backdrop-blur-md">
                <h1 className="mb-2 flex items-center gap-3 text-base font-bold">
                  <span>분위기 태그</span>
                  <Icon id="project-tag" className="h-5 w-5" />
                </h1>
                <div className="flex flex-wrap gap-1">
                  {projectTags.map(tag => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-neoGreen/70"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </span>
          <Link href={githubUrl} target="_blank" className="flex items-center">
            @{githubId}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="relative flex grow flex-col items-center gap-8 px-3 py-2">
        <div className="flex w-full flex-col gap-3">
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
                  {jandiRate < 0 ? "NaN" : jandiRate}%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1 p-1">
              <h1 className="text-2xl font-bold">
                <span className="relative text-black">{username}</span>
              </h1>
              <h3 className="mt-3 text-xs font-bold text-[#F76A6A]">
                {achievementTitle ?? "칭호가 없습니다."}
              </h3>
            </div>
            <p className="line-clamp-3 w-40 overflow-hidden text-center text-sm">
              {bio ?? "소개 문구가 없습니다."}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <InfoPopover type="INTEREST" infoList={wantedJobs} />
            <InfoPopover type="LANG" infoList={developLanguages} />
          </div>
        </div>
      </CardContent>
      {!initialRotate && (
        <CardFooter className="m-2 flex shrink-0 items-center justify-between rounded-lg border-2 border-black bg-[#8f8f8f35] p-3 backdrop-blur-md">
          <div>
            <p className="font-bold">{meetDetail}</p>
            <p className="text-xs">
              {formatMeetingTime(meetStartTime, meetEndTime)}
            </p>
          </div>
          {user && user.id !== id ? (
            <ButtonRequest projectId={projectId} />
          ) : (
            <ProjectRemoveDialog
              projectId={projectId}
              projectStatus={projectStatus}
              matchingId={matchingId}
            />
          )}
        </CardFooter>
      )}
    </Card>
  );
}

export default ProjectCardFront;
