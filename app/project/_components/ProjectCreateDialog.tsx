"use client";

import { Button } from "@/app/_common/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogPortal,
} from "@/app/_common/shadcn/ui/dialog";
import { IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import ProjectCreateForm from "./ProjectCreateForm";

function ProjectCreateDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-12 w-12 rounded-full p-3 shadow-md">
          <IconPlus />
        </Button>
      </DialogTrigger>
      <DialogPortal />
      <DialogOverlay className="bg-white backdrop-blur-md" />
      <DialogContent className="flex max-w-[325px] flex-col items-start gap-10 rounded-lg">
        <DialogHeader>
          <DialogTitle>프로젝트 카드 생성</DialogTitle>
        </DialogHeader>
        <ProjectCreateForm onClose={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default ProjectCreateDialog;
