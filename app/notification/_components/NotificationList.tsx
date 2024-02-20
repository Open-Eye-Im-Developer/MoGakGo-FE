import { twMerge } from "tailwind-merge";
import Lottie from "react-lottie-player";
import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/app/_common/shadcn/ui/button";

import { NotificationType } from "../_types/notification";
import Notification from "../_components/Notification";
import animation from "../_assets/notification.json";
import useGetNotifications from "../_api/useGetNotifications";

function NotificationList() {
  const { data: notificaitons } = useGetNotifications();

  return (
    <>
      {notificaitons?.length ? (
        [...notificaitons]
          .reverse()
          .map((notification: NotificationType, index: number) => (
            <div key={index.toString()}>
              <Notification notification={notification} />
            </div>
          ))
      ) : (
        <div className="m-auto flex w-fit flex-col p-2 text-gray-600">
          <Lottie
            loop
            play
            animationData={animation}
            style={{ width: 150, height: 150 }}
          />
          <div>아직 받은 알람이 없어요</div>
          <Link
            className={twMerge(
              buttonVariants({ variant: "ghost" }),
              "text-gray-400",
            )}
            href={"/"}
          >
            활동하러 가기
          </Link>
        </div>
      )}
    </>
  );
}

export default NotificationList;
