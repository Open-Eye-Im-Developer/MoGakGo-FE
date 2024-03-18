"use client";

import React from "react";
import { IconLogout } from "@tabler/icons-react";

import { useMatchingStore } from "@/app/_common/store/useMatchingStore";
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
}

function ProjectRemoveDialog(props: ProjectRemoveDialogProps) {
  const { projectId } = props;
  const { matchingId } = useMatchingStore();
  const { createCancelMatching } = useCacnelMatchingMutation(matchingId!);
  const { createCancelProject } = useCancelProjectMutation(projectId);
  const isMatchedProject = matchingId !== null;

  const triggerComponent = isMatchedProject ? (
    <Button>
      <IconLogout />
    </Button>
  ) : (
    <Button>취소</Button>
  );

  const titleComponent = isMatchedProject
    ? "정말 매칭을 취소하시겠어요?"
    : "정말 프로젝트를 취소하시겠어요?";

  const descriptionComponent = "이 작업은 되돌릴 수 없어요!";

  const handleCancelProject = async () => {
    createCancelProject();
  };

  const handleCancelMatch = async () => {
    createCancelMatching();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="bg-neoRed text-white">
        {triggerComponent}
      </AlertDialogTrigger>
      <AlertDialogPortal />
      <AlertDialogOverlay className="h-full w-full bg-transparent backdrop-blur-md" />
      <AlertDialogContent className="flex max-w-[300px] flex-col items-start gap-10 rounded-lg border border-black shadow-neo">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base">
            {titleComponent}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-xs">
            {descriptionComponent}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full flex-col gap-2 sm:flex-col">
          <AlertDialogAction
            onClick={isMatchedProject ? handleCancelMatch : handleCancelProject}
          >
            취소할래요.
          </AlertDialogAction>
          <AlertDialogCancel className="ml-0 mt-0 sm:ml-0">
            안 할래요.
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ProjectRemoveDialog;
