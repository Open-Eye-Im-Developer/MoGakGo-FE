"use client";

import React from "react";

import ProjectCardContainer from "./_components/ProjectCardContainer";
// import ProjectCreateDialog from "./_components/ProjectCreateDialog";

function ProjectPage() {
  return (
    <div className="flex h-screen items-center justify-center pb-12">
      {/* <ProjectCreateDialog /> */}
      <ProjectCardContainer />
    </div>
  );
}

export default ProjectPage;
