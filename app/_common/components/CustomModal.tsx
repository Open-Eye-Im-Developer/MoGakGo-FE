"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { DialogContentNoClose } from "../shadcn/ui/dialog";

interface CustomModalProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

function CustomModal({ children, ...props }: CustomModalProps) {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.setOpen}>
      <Dialog.Portal>
        <DialogContentNoClose
          className="flex max-w-[450px] flex-col gap-10 p-5"
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
