"use client";

import React from "react";
import { IconLogout } from "@tabler/icons-react";

import { ToastAction } from "@/app/_common/shadcn/ui/toast";
import { Button } from "@/app/_common/shadcn/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_common/shadcn/ui/alert-dialog";

import usePopupToast from "../_hooks/usePopupToast";

interface ProjectRemoveDialogProps {
  isMatchedProject: boolean;
}

// TODO: 요청이 있을 경우 삭제하지 못하는 로직 추가하기 & 서버에서 카드 id를 받아와서 "매칭 & 프로젝트 카드" 취소 요청하기
// TODO: 매칭 여부를 서버에서 받아와서 처리하기 & 매칭이 된 경우 달라져야 하는 버튼을 HOC로 만들어서 사용하기
function ProjectRemoveDialog(props: ProjectRemoveDialogProps) {
  const { isMatchedProject } = props;
  const { showToast } = usePopupToast(
    <ToastAction altText="다시 시도">다시 시도</ToastAction>,
  );

  const triggerComponent = isMatchedProject ? (
    <Button>
      <IconLogout />
    </Button>
  ) : (
    <Button>삭제</Button>
  );

  const titleComponent = isMatchedProject
    ? "정말 프로젝트를 취소하시겠어요?"
    : "정말 프로젝트를 삭제하시겠어요?";
  const descriptionComponent = isMatchedProject
    ? "한 번 취소된 프로젝트는 되돌릴 수 없어요!"
    : "한 번 삭제된 프로젝트는 되돌릴 수 없어요!";

  const handleCancelProject = async () => {
    const response = await fetch("/api/project/cancel", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 65 }),
    });
    const { data, status } = await response.json();
    showToast(data, status);
  };

  const handleCancelMatch = async () => {
    const response = await fetch("/api/match/cancel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matchingId: 65 }),
    });
    const { data, status } = await response.json();
    showToast(data, status);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerComponent}</AlertDialogTrigger>
      <AlertDialogPortal />
      <AlertDialogOverlay className="h-full w-full bg-transparent backdrop-blur-md" />
      <AlertDialogContent className="flex max-w-[300px] flex-col items-start gap-10 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>{titleComponent}</AlertDialogTitle>
          <AlertDialogDescription>
            {descriptionComponent}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row items-center gap-2 self-end">
          <AlertDialogAction
            onClick={isMatchedProject ? handleCancelMatch : handleCancelProject}
          >
            진행
          </AlertDialogAction>
          <AlertDialogCancel className="mt-0">취소</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ProjectRemoveDialog;
