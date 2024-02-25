import Lottie from "react-lottie-player";
import Link from "next/link";

import { cn } from "@/app/_common/shadcn/utils";
import { buttonVariants } from "@/app/_common/shadcn/ui/button";

import animation from "../_assets/notification.json";

function AnnounceEmptyNotification() {
  return (
    <div className="m-auto flex w-fit flex-col p-2 text-gray-600">
      <Lottie play animationData={animation} />
      <span>아직 받은 알람이 없어요</span>
      <Link
        href={"/"}
        className={cn(buttonVariants({ variant: "ghost" }), "text-gray-400")}
      >
        활동하러 가기
      </Link>
    </div>
  );
}

export default AnnounceEmptyNotification;
