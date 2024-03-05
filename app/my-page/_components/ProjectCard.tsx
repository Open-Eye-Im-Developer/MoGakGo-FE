import { useMemo } from "react";
import { IconExclamationCircle } from "@tabler/icons-react";

import formatMeetingTime from "@/app/project/_utils/formatMeetingTime";
import { Button } from "@/app/_common/shadcn/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_common/shadcn/ui/alert-dialog";

import {
  ProjectSummary,
  ReqeustProjectSummary,
} from "@/app/_common/types/project";
import { Match } from "@/app/_common/types/matching";

import { useMutationMatchCancel } from "../_hooks/useMutationMatchCancel";

interface CardProps {
  data: Match | ProjectSummary | ReqeustProjectSummary;
}

function ProjectCard({ data }: CardProps) {
  const normalizedData = useMemo(() => {
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

  if (!normalizedData)
    return (
      <div className="align-center flex items-center gap-4 rounded-md bg-white p-3 dark:bg-gray-900">
        <div className="flex gap-2 text-red-500">
          <IconExclamationCircle />
          <p>올바르지 않은 만남 데이터입니다.</p>
        </div>
      </div>
    );

  return (
    <div className="align-center flex items-center gap-4 rounded-md bg-white p-3 dark:bg-gray-900">
      <div className="h-12 w-12 rounded-full">
        <img src={normalizedData.image} alt="another user avatar" />
      </div>
      <div className="flex grow flex-col justify-center space-y-2">
        <div className="text-sm">📍{normalizedData.location}</div>
        <div className="text-xs">
          🕡
          {formatMeetingTime(normalizedData.startTime, normalizedData.endTime)}
        </div>
      </div>
      {normalizedData.status && normalizedData.status === "MATCHED" ? (
        <MatchCancelButton id={normalizedData.id} />
      ) : null}
    </div>
  );
}

interface MatchCancelButtonProps {
  id: number;
}

function MatchCancelButton({ id }: MatchCancelButtonProps) {
  const { mutate } = useMutationMatchCancel();

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>취소</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말 매치를 취소하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 되돌릴 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>아니요</AlertDialogCancel>
          <AlertDialogAction onClick={() => mutate(id)}>
            매치 취소하기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ProjectCard;
