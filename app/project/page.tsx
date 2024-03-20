import React from "react";

import { generateViewport } from "../_common/utils/generateViewport";
import WithNavigation from "../_common/hoc/WithNavigation";
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

export default WithNavigation(ProjectPage, true);
