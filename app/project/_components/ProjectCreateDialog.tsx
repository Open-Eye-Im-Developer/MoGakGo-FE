"use client";

import React, { useState } from "react";
import { IconPlus } from "@tabler/icons-react";

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

import useFlip from "../_hooks/useFlip";
import ProjectCreateForm from "./ProjectCreateForm";
import ButtonRotate from "./ButtonRotate";

function ProjectCreateDialog() {
  const [open, setOpen] = useState(false);
  const { flipped, handleFlip } = useFlip();

  // TODO: 프로젝트 생성 카드 뒷면을 실제 제안자의 프로필 카드로 변경(현재는 주석 처리)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-12 w-12 rounded-full p-3 shadow-md">
          <IconPlus />
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-white backdrop-blur-md" />
        <DialogContent className="flex h-[600px] max-w-[325px] flex-col items-start gap-10 rounded-lg border-none bg-transparent p-0 [perspective:1000px]">
          <div
            className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
          >
            <Card className="card absolute inset-0 left-0 top-0 flex h-full flex-col border-none px-1 pt-1 shadow-md [backface-visibility:hidden]">
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
            {/* <ProjectCardFront onRotate={handleFlip} initialRotate /> */}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default ProjectCreateDialog;
