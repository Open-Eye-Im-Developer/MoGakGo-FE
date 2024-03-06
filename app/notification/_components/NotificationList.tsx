"use client";
import AnnounceEmptyActive from "@/app/_common/components/AnnounceEmptyNotification";

import { NotificationType } from "../_types/notification";
import Notification from "../_components/Notification";
import notificationEmptyAnimaiton from "../_assets/notification.json";
import useGetNotifications from "../_api/useGetNotifications";

function NotificationList() {
  const { data: notificaitons } = useGetNotifications();

  return (
    <>
      {notificaitons?.length ? (
        [...notificaitons]
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
