"use client";

import React, { useEffect } from "react";

import { useMatchingStore } from "@/app/_common/store/useMatchingStore";
import { cn } from "@/app/_common/shadcn/utils";
import { useToast } from "@/app/_common/shadcn/ui/use-toast";

import useGetCurrentProjectQuery from "../_hooks/useGetCurrentProjectQuery";
import ProjectCreateDialog from "./ProjectCreateDialog";

function ProjectManageSection() {
  const { project, matchingId, isError, error } = useGetCurrentProjectQuery();
  const { setMatchingId } = useMatchingStore();
  const { toast } = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        title: "프로젝트 정보를 가져오는 중 오류가 발생했습니다.",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    }
  }, [error, isError]);

  useEffect(() => {
    setMatchingId(matchingId);
  }, [matchingId]);

  return (
    <main
      className={cn(
        "relative flex h-full w-full flex-col items-center",
        !project ? "justify-center" : "",
      )}
    >
      <div className="map-background" />
      <div className="map-background" />
      {!project && (
        <div className="z-50 flex h-[300px] flex-col items-center justify-between rounded-xl border-4 border-dotted border-black p-10 md:h-[550px]">
          <header className="space-y-3 text-center">
            <h1 className="text-lg font-bold">생성한 프로젝트가 없어요!</h1>
            <h2 className="text-sm">프로젝트를 새로 생성해주세요.</h2>
          </header>
          <ProjectCreateDialog />
        </div>
      )}
    </main>
  );
}

export default ProjectManageSection;
