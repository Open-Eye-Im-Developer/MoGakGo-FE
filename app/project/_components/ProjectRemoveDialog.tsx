"use client";

import React from "react";

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

// TODO: 삭제 버튼 클릭 시 서버 이벤트 연결하기 & 요청이 있을 경우 삭제하지 못하는 로직 추가하기
function ProjectRemoveDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>삭제</Button>
      </AlertDialogTrigger>
      <AlertDialogPortal />
      <AlertDialogOverlay className="h-full w-full bg-transparent backdrop-blur-md" />
      <AlertDialogContent className="flex max-w-[300px] flex-col items-start gap-10 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>정말 프로젝트를 삭제하시겠어요?</AlertDialogTitle>
          <AlertDialogDescription>
            한 번 삭제된 프로젝트는 되돌릴 수 없어요!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row items-center gap-2 self-end">
          <AlertDialogAction>삭제</AlertDialogAction>
          <AlertDialogCancel className="mt-0">취소</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ProjectRemoveDialog;