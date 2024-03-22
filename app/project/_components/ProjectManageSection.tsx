"use client";

import React, { useEffect } from "react";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";

import useGetCurrentProjectQuery from "../_hooks/useGetCurrentProjectQuery";
import ProjectCreateDialog from "./ProjectCreateDialog";

function ProjectManageSection() {
  const { project, matchingId, isError } = useGetCurrentProjectQuery();
  const { toast } = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        title: "모각고 정보를 가져오는 중 오류가 발생했습니다.",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    }
  }, [isError]);

  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="map-background" />
      <div className="map-background" />
      <div className="z-50 mx-10 flex h-[300px] flex-col items-center justify-center rounded-xl border-4 border-dotted border-black p-10 md:h-[550px]">
        <header className="space-y-3 text-center">
          {!project && (
            <>
              <h1 className="text-base font-bold">생성된 모각고가 없어요!</h1>
              <h2 className="text-sm">
                모각고를 새로 생성하거나 매칭을 기다려주세요!
              </h2>
              <ProjectCreateDialog />
            </>
          )}
          {project && matchingId === null && (
            <>
              <h1 className="text-base font-bold">매칭된 모각고가 없어요!</h1>
              <h2 className="text-sm">
                모각고 매칭을 기다려주세요! 모각고 관리는 마이 페이지에서 할 수
                있어요!
              </h2>
            </>
          )}
          {project && matchingId && (
            <>
              <h1 className="text-base font-bold">모각고가 매칭되었어요!</h1>
              <h2 className="text-sm">
                채팅방으로 이동해서 자세한 얘기를 나눠봐요!
              </h2>
            </>
          )}
        </header>
      </div>
    </main>
  );
}

export default ProjectManageSection;
