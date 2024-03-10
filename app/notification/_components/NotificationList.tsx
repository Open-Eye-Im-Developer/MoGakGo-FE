"use client";

import AnnounceEmptyActive from "@/app/_common/components/AnnounceEmptyNotification";
import ActivityCardSkeleton from "@/app/_common/components/ActivityCardSkeleton";

import { NotificationType } from "../_types/notification";
import Notification from "../_components/Notification";
import notificationEmptyAnimaiton from "../_assets/notification.json";
import useGetNotifications from "../_api/useGetNotifications";

function NotificationList() {
  const { notifications, isLoading } = useGetNotifications();

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
      {notifications?.length ? (
        [...notifications]
          .reverse()
          .map((notification: NotificationType, index: number) => (
            <Notification notification={notification} key={index} />
          ))
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
