"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
  DialogPortal,
} from "@/app/_common/shadcn/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_common/shadcn/ui/card";
import { Button } from "@/app/_common/shadcn/ui/button";

import Icon from "@/app/_common/components/Icon";

import useFlip from "../_hooks/useFlip";
import ProjectCreateForm from "./ProjectCreateForm";
import ButtonRotate from "./ButtonRotate";

function ProjectCreateDialog() {
  const [open, setOpen] = useState(false);
  const { flipped, handleFlip } = useFlip();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-12 w-12 rounded-full p-3 shadow-md">
          <Icon id="plus" />
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/20" />
        <DialogContent className="flex h-[600px] max-w-[325px] flex-col items-start gap-10 rounded-lg border-none bg-transparent p-0 [perspective:1000px]">
          <div
            className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
          >
            <Card className="absolute inset-0 left-0 top-0 flex h-full flex-col [backface-visibility:hidden]">
              <CardHeader className="flex flex-row items-center justify-between border-b px-4 py-2">
                <CardTitle className="flex grow flex-row items-center justify-between text-lg">
                  <p>프로젝트 카드 생성</p>
                  <ButtonRotate onRotate={handleFlip} />
                </CardTitle>
              </CardHeader>
              <CardContent className="grow pt-6">
                <ProjectCreateForm onClose={setOpen} />
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default ProjectCreateDialog;
