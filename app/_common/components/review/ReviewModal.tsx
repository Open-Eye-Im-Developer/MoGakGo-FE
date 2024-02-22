"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../shadcn/ui/dialog";

interface ReviewModalProps {
  children: React.ReactNode;
}

function ReviewModal({ children, ...props }: ReviewModalProps) {
  return (
    <>
      <Dialog {...props}>
        <DialogTrigger>열기</DialogTrigger>
        <DialogContent className="flex flex-col gap-10 p-5">
          {children}
        </DialogContent>
        <DialogClose>닫기</DialogClose>
      </Dialog>
    </>
  );
}

export default ReviewModal;
