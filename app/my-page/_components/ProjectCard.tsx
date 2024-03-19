import { useMemo } from "react";
import { IconExclamationCircle } from "@tabler/icons-react";

import formatMeetingTime from "@/app/project/_utils/formatMeetingTime";
import { cn } from "@/app/_common/shadcn/utils";
import { Badge } from "@/app/_common/shadcn/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

import { MATCH_STATUS } from "@/app/_common/constants/matchStatus";

import {
  ProjectSummary,
  RequestProjectSummary,
} from "@/app/_common/types/project";
import { Match } from "@/app/_common/types/matching";

import MatchCancelButton from "./MatchCancelButton";

interface CardProps {
  data: Match | ProjectSummary | RequestProjectSummary;
}

function ProjectCard({ data }: CardProps) {
  const project = useMemo(() => {
    if ("status" in data) {
      return {
        id: data.matchingId,
        status: data.status,
        image: data.anotherUserAvatarUrl,
        location: data.projectLocationDetail,
        startTime: data.projectStartTime,
        endTime: data.projectEndTime,
      };
    } else if ("projectStatus" in data) {
      return {
        id: data.projectId,
        status: data.projectStatus,
        image: data.creatorAvatorUrl,
        location: data.projectLocationDetail,
        startTime: data.projectStartTime,
        endTime: data.projectEndTime,
      };
    } else if ("meetingInfo" in data) {
      return {
        id: data.projectId,
        status: undefined,
        image: data.creatorAvatorUrl,
        location: data.meetingInfo.meetDetail,
        startTime: data.meetingInfo.meetStartTime,
        endTime: data.meetingInfo.meetEndTime,
      };
    }
  }, [data]);

  if (!project)
    return (
      <div className="align-center flex items-center gap-4 rounded-md border-2 border-black p-3 shadow-neo-thin dark:border-white">
        <div className="flex gap-2 text-red-500">
          <IconExclamationCircle />
          <p>올바르지 않은 만남 데이터입니다.</p>
        </div>
      </div>
    );

  return (
    <div className="align-center flex items-center gap-4 rounded-md border-2 border-black p-3 shadow-neo-thin dark:border-white">
      <Avatar className="h-12 w-12">
        <AvatarImage src={project.image} />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="flex grow flex-col justify-center space-y-1">
        <div className="flex items-center gap-2 text-sm">
          <p>{project.location}</p>
          {project.status ? (
            <Badge
              className={cn(
                "pointer-events-none shrink-0 text-white",
                MATCH_STATUS[project.status].color,
              )}
            >
              {MATCH_STATUS[project.status].label}
            </Badge>
          ) : null}
        </div>
        <div className="text-xs">
          {formatMeetingTime(project.startTime, project.endTime)}
        </div>
      </div>
      {project.status && project.status === "MATCHED" ? (
        <MatchCancelButton id={project.id} />
      ) : null}
    </div>
  );
}

export default ProjectCard;
