import React from "react";

import { generateViewport } from "../_common/utils/generateViewport";
import { theme } from "../_common/constants/viewPortTheme";
import ProjectManageSection from "./_components/ProjectManageSection";

import type { Viewport } from "next";

export const viewport: Viewport = generateViewport(theme.SKY);

function ProjectPage() {
  return (
    <section className="h-screen w-full">
      <ProjectManageSection />
    </section>
  );
}

export default ProjectPage;
