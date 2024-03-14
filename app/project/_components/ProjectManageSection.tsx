"use client";

import React, { useEffect } from "react";

import { useMatchingStore } from "@/app/_common/store/useMatchingStore";

import useGetCurrentProjectQuery from "../_hooks/useGetCurrentProjectQuery";
import ProjectCreateDialog from "./ProjectCreateDialog";
import ProjectCardContainer from "./ProjectCardContainer";

function ProjectManageSection() {
  const { project, matchingId } = useGetCurrentProjectQuery();
  const { setMatchingId } = useMatchingStore();

  useEffect(() => {
    setMatchingId(matchingId);
  }, [matchingId]);

  return (
    <main className="container flex h-full w-full flex-col items-center justify-center">
      {!project && (
        <div className="flex h-[300px] flex-col items-center justify-between rounded-xl border-4 border-dotted p-10 md:h-[550px]">
          <header className="space-y-3 text-center text-[#7b7b7b]">
            <h1 className="text-2xl font-bold">생성한 프로젝트가 없어요!</h1>
            <h2>프로젝트를 새로 생성해주세요.</h2>
          </header>
          <ProjectCreateDialog />
        </div>
      )}
      <div className="mt-5">
        {project && <ProjectCardContainer project={project} />}
      </div>
    </main>
  );
}

export default ProjectManageSection;
