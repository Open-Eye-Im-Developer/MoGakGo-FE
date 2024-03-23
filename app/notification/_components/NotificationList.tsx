"use client";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import dynamic from "next/dynamic";

import ActivityCardSkeleton from "@/app/_common/components/ActivityCardSkeleton";

import { NotificationType } from "../_types/notification";
import notificationEmptyAnimaiton from "../_assets/notification.json";
import useGetNotifications from "../_api/useGetNotifications";

const Notification = dynamic(() => import("../_components/Notification"), {
  ssr: false,
});
const AnnounceEmptyActive = dynamic(
  () => import("@/app/_common/components/AnnounceEmptyNotification"),
  {
    ssr: false,
  },
);

function NotificationList() {
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetNotifications();

  const notifications =
    data?.pages.map(page => (page ? page.data : [])).flat() ?? [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading)
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <ActivityCardSkeleton key={index} />
        ))}
      </div>
    );

  return (
    <>
      {notifications.length ? (
        <div className="mt-6">
          {[...notifications].map((notification: NotificationType) => (
            <Notification notification={notification} key={notification.id} />
          ))}
          {hasNextPage && <div ref={ref} />}
        </div>
      ) : (
        <AnnounceEmptyActive
          description="아직 받은 알람이 없어요"
          animation={notificationEmptyAnimaiton}
        />
      )}
    </>
  );
}

export default NotificationList;
