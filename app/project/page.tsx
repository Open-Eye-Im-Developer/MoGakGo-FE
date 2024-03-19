import React from "react";

import { generateViewport } from "../_common/utils/generateViewport";
import ProjectManageSection from "./_components/ProjectManageSection";

import type { Viewport } from "next";

export const viewport: Viewport = generateViewport("#7DD1F2");

function ProjectPage() {
  return (
    <section className="h-screen w-full">
      <ProjectManageSection />
    </section>
  );
}

export default ProjectPage;
