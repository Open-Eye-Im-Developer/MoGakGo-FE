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
        achievementTitle,
        bio,
        wantedJobs,
        jandiRate,
        developLanguages,
      },
      projectTags,
      projectId,
      meetingInfo: { meetDetail, meetEndTime, meetStartTime },
    },
  } = props;
  const { user } = useAuthStore();

  return (
    <Card
      className={cn(
        `absolute inset-0 left-0 top-0 flex flex-col [backface-visibility:hidden]`,
        initialRotate ? "[transform:rotateY(180deg)]" : "",
      )}
    >
      <CardHeader className="px-3 pt-2">
        <CardDescription className="flex justify-between text-lg font-bold text-black">
          <span className="flex items-center">
            <ButtonRotate
              isDisabled={!user || user.id !== id}
              onRotate={onRotate}
            />
            <Popover>
              <PopoverTrigger className="rounded-md p-3 hover:bg-[#5454543e]">
                <Icon id="project-tag" className="h-5 w-5" />
              </PopoverTrigger>
              <PopoverContent className="max-w-[150px]">
                <h1 className="mb-2 text-base font-bold">분위기 태그</h1>
                <div className="flex flex-wrap gap-1">
                  {projectTags.map(tag => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </span>
          <Link
            href={githubUrl}
            target="_blank"
            className="flex items-center text-[#A2A2A2]"
          >
            @{githubId}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8 px-3 py-2 grow">
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
              <h3 className="text-xs text-[#F76A6A]">{achievementTitle}</h3>
            </div>
            <p className="w-60 overflow-hidden text-center text-sm">{bio}</p>
          </div>
          <div className="flex flex-col items-center">
            <InfoPopover type="INTEREST" infoList={wantedJobs} />
            <InfoPopover type="LANG" infoList={developLanguages} />
          </div>
        </div>
      </CardContent>
      {!initialRotate && (
        <CardFooter className="flex items-center justify-between px-4">
          <div>
            <p className="font-bold">{meetDetail}</p>
            <p className="text-xs">
              {formatMeetingTime(meetStartTime, meetEndTime)}
            </p>
          </div>
          {user && user.id !== id ? (
            <ButtonRequest projectId={projectId} />
          ) : (
            <ProjectRemoveDialog projectId={projectId} />
          )}
        </CardFooter>
      )}
    </Card>
  );
}

export default ProjectCardFront;
