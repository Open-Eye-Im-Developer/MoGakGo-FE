import React from "react";

import formatMeetingTime from "@/app/project/_utils/formatMeetingTime";
import ProjectCardContainer from "@/app/project/_components/ProjectCardContainer";
import { cn } from "@/app/_common/shadcn/utils";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "@/app/_common/shadcn/ui/dialog";
import { Button } from "@/app/_common/shadcn/ui/button";
import { Badge } from "@/app/_common/shadcn/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

import Icon from "@/app/_common/components/Icon";

import { MATCH_STATUS } from "@/app/_common/constants/matchStatus";

import { useQueryUserData } from "../_hooks/useQueryUserData";
import { useQueryCurrentMatchingProject } from "../_hooks/useQueryCurrentMatchingProject";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

function MyCurrentMatchingProject() {
  const { data: userData } = useQueryUserData();
  const { project, matchingId, isLoading } = useQueryCurrentMatchingProject(
    userData?.id,
  );

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-md font-bold">현재 매칭된 카드</h1>
      <div className="flex flex-col gap-2">
        {isLoading ? <ProjectCardSkeleton /> : null}
        {project === null && matchingId === null ? (
          <p className="text-sm text-gray-500">매칭된 카드가 없습니다.</p>
        ) : (
          <div className="align-center flex items-center gap-4 rounded-md border-2 border-black p-3 shadow-neo-thin dark:border-white">
            <Avatar className="h-12 w-12">
              <AvatarImage src={project.creator.avatarUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex grow flex-col justify-center space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <p>{project.meetingInfo.meetDetail}</p>
                {project.projectStatus ? (
                  <Badge
                    className={cn(
                      "pointer-events-none shrink-0 text-white",
                      MATCH_STATUS[project.projectStatus].color,
                    )}
                  >
                    {MATCH_STATUS[project.projectStatus].label}
                  </Badge>
                ) : null}
              </div>
              <div className="text-xs">
                {formatMeetingTime(
                  project.meetingInfo.meetStartTime,
                  project.meetingInfo.meetEndTime,
                )}
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Icon id="chevron-right" size={24} />
                </Button>
              </DialogTrigger>
              <DialogPortal />
              <DialogContent className="top-[45%] border-none bg-transparent shadow-none">
                <ProjectCardContainer
                  project={project}
                  matchingId={matchingId}
                />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCurrentMatchingProject;
