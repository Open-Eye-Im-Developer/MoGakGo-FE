import React from "react";

import WithNavigation from "../_common/hoc/WithNavigation";
import ProjectManageSection from "./_components/ProjectManageSection";

function ProjectPage() {
  return (
    <section className="h-screen w-full">
      <ProjectManageSection />
    </section>
  );
}

export default WithNavigation(ProjectPage, true);
