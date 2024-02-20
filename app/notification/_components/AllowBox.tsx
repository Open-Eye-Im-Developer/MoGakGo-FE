import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AlertDialog, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { Button } from "@/app/_common/shadcn/ui/button";

// import { getFCMToken } from "../_api";
import ModalDenied from "./ModalDenied";
function AllowBox() {
  const { toast } = useToast();
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  const handleClickAllowButton = () => {
    if (Notification.permission === "denied") return setIsModalShow(true);

    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        // getFCMToken();
        toast({
          description: "PUSH 알림을 허용했어요",
        });
      }
    });
  };

  if (!Notification) return;

  return (
    <div
      className={twMerge(
        "align-center m-4 flex justify-between rounded-lg bg-primary p-6 font-medium",
        Notification.permission === "granted" && "hidden",
      )}
    >
      <div className="my-auto text-white">PUSH 알림 켜기</div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" onClick={handleClickAllowButton}>
            알림 켜기
          </Button>
        </AlertDialogTrigger>
        {isModalShow && <ModalDenied />}
      </AlertDialog>
    </div>
  );
}

export default AllowBox;
