"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import { useQueryUserData } from "@/app/my-page/_hooks/useQueryUserData";
import { useQueryCurrentMatchingProject } from "@/app/my-page/_hooks/useQueryCurrentMatchingProject";
import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { Button } from "@/app/_common/shadcn/ui/button";

import LoadingSpinner from "@/app/_common/components/LoadingSpinner";

import ProjectCreateDialog from "./ProjectCreateDialog";

function ProjectManageSection() {
  const { data: userData } = useQueryUserData();
  const { project, isLoading, isError } = useQueryCurrentMatchingProject(
    userData?.id,
  );
  const { toast } = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        title: "프로젝트 정보를 가져오는 중 오류가 발생했습니다.",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    }
  }, [isError]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  console.log(project);
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="map-background" />
      <div className="map-background" />
      {!project && (
        <div className="z-50 mx-10 flex h-[300px] flex-col items-center justify-between rounded-xl border-4 border-dotted border-black p-10 md:h-[550px]">
          <header className="space-y-3 text-center">
            {!project ? (
              <>
                <h1 className="text-lg font-bold">
                  생성, 매칭된 프로젝트가 없어요!
                </h1>
                <h2 className="text-sm">
                  프로젝트를 새로 생성하거나 매칭을 기다려주세요!
                </h2>
              </>
            ) : (
              <>
                <h1 className="text-lg font-bold">프로젝트가 매칭되었어요!</h1>
                <Button>
                  <Link href="/my-page" />
                </Button>
              </>
            )}
          </header>
          <ProjectCreateDialog />
        </div>
      )}
    </main>
  );
}

export default ProjectManageSection;
