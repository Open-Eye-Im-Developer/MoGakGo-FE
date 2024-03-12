"use client";

import React from "react";

import useGetCurrentProjectQuery from "../_hooks/useGetCurrentProjectQuery";
import ProjectCreateDialog from "./ProjectCreateDialog";
import ProjectCardContainer from "./ProjectCardContainer";

function ProjectManageSection() {
  const { project, matchingId } = useGetCurrentProjectQuery();

  return (
    <main className="flex h-full w-full flex-col items-center ">
      {project && project.length === 0 && (
        <div className="flex h-[300px] flex-col items-center justify-between rounded-xl border-4 border-dotted p-10 md:h-[550px]">
          <header className="space-y-3 text-center text-[#7b7b7b]">
            <h1 className="text-2xl font-bold">생성한 프로젝트가 없어요!</h1>
            <h2>프로젝트를 새로 생성해주세요.</h2>
          </header>
          <ProjectCreateDialog />
        </div>
      )}
      <div className="mt-5">
        {project && project.length > 0 && (
          <ProjectCardContainer project={project[0]} matchingId={matchingId} />
        )}
      </div>
    </main>
  );
}

export default ProjectManageSection;
