"use client";
import { useState } from "react";
import { AlertDialog, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";

import { cn } from "@/app/_common/shadcn/utils";
import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { Button } from "@/app/_common/shadcn/ui/button";

import { getFCMToken } from "../_api";
import ModalDenied from "./ModalDenied";

function AllowBox() {
  const { toast } = useToast();

  const [showModal, setShowModal] = useState<boolean>(false);

  const permission = () => {
    if (typeof Notification === "undefined") return "granted";
    return Notification.permission;
  };

  const handleClickAllowButton = () => {
    if (permission() === "denied") return setShowModal(true);
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        getFCMToken();
        toast({
          description: "PUSH 알림을 허용했어요",
        });
      }
    });
  };

  return (
    <div
      className={cn(
        "align-center m-4 flex justify-between rounded-lg bg-primary p-6 font-medium",
        permission() === "granted" && "hidden",
      )}
    >
      <div className="my-auto text-white">PUSH 알림 켜기</div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" onClick={handleClickAllowButton}>
            알림 켜기
          </Button>
        </AlertDialogTrigger>
        {showModal && <ModalDenied />}
      </AlertDialog>
    </div>
  );
}

export default AllowBox;
