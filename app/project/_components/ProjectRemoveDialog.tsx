"use client";

import React from "react";
import { IconLogout } from "@tabler/icons-react";

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

import useCancelProjectMutation from "../_hooks/useCancelProjectMutation";
import useCacnelMatchingMutation from "../_hooks/useCancelMatchingMutation";

interface ProjectRemoveDialogProps {
  projectId: number;
  isMatchedProject: boolean;
}
function ProjectRemoveDialog(props: ProjectRemoveDialogProps) {
  const { projectId, isMatchedProject } = props;
  const { createCancelMatching } = useCacnelMatchingMutation(52); // TODO: 매칭 id 받아오기
  const { createCancelProject } = useCancelProjectMutation(projectId);

  const triggerComponent = isMatchedProject ? (
    <Button>
      <IconLogout />
    </Button>
  ) : (
    <Button>삭제</Button>
  );

  const titleComponent = isMatchedProject
    ? "정말 매칭을 취소하시겠어요?"
    : "정말 프로젝트를 삭제하시겠어요?";
  const descriptionComponent = isMatchedProject
    ? "한 번 취소된 매칭은 되돌릴 수 없어요!"
    : "한 번 삭제된 프로젝트는 되돌릴 수 없어요!";

  const handleCancelProject = async () => {
    createCancelProject();
  };

  const handleCancelMatch = async () => {
    createCancelMatching();
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
