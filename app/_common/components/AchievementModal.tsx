import React from "react";

import { Progress } from "../shadcn/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "../shadcn/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import WithOnMounted from "../hoc/WithOnMounted";
import { ModalState } from "./types/achievementModal";

interface AchievementModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  state: ModalState | null;
}

function AchievementModal(props: AchievementModalProps) {
  const { isOpen, setOpen, state } = props;

  return (
    <Dialog open={isOpen} onOpenChange={() => setOpen(false)}>
      <DialogPortal />
      <DialogContent
        className="z-[9999] max-w-[350px] rounded-lg bg-white"
        isXHidden={false}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">업적 획득! 🎉</DialogTitle>
        </DialogHeader>
        <section className="flex flex-col items-center justify-center gap-5">
          <Avatar className="h-40 w-40 shadow-neo-thin">
            <AvatarImage src={state!.imgUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-xl font-bold text-neoBlue">{state!.title}</p>
          <div className="mb-3 flex w-full flex-col items-center justify-center gap-2">
            <Progress
              value={100}
              background="blue"
              className="shadow-neo-thin"
            />
            <p className="text-xs">
              {state?.progressCount} / {state?.requirementValue}
            </p>
          </div>
          <p className="text-xs">업적 변경은 마이페이지에서 할 수 있어요!</p>
        </section>
      </DialogContent>
    </Dialog>
  );
}

export default WithOnMounted(AchievementModal);
