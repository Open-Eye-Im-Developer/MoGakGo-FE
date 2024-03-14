"use client";

import { ComponentProps } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { cn } from "../shadcn/utils";
import { DialogContentNoClose } from "../shadcn/ui/dialog";

interface CustomModalProps {
  children: React.ReactNode;
  open: boolean;
  className?: ComponentProps<typeof cn>;
  setOpen: (open: boolean) => void;
}

function CustomModal({ children, className, ...props }: CustomModalProps) {
  return (
    <Dialog.Root onOpenChange={props.setOpen} {...props}>
      <Dialog.Portal>
        <DialogContentNoClose
          className={cn(
            "flex max-w-[300px] flex-col rounded-md border-2 border-black p-4 shadow-neo",
            className,
          )}
          onPointerDownOutside={(event: Event) => {
            event.preventDefault();
          }}
          onInteractOutside={(event: Event) => {
            event.preventDefault();
          }}
        >
          {children}
        </DialogContentNoClose>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default CustomModal;
