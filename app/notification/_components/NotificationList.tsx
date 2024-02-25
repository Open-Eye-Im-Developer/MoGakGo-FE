"use client";
import { NotificationType } from "../_types/notification";
import Notification from "../_components/Notification";
import useGetNotifications from "../_api/useGetNotifications";
import AnnounceEmptyNotificaiton from "./AnnounceEmptyNotification";
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
        <AnnounceEmptyNotificaiton />
      )}
    </>
  );
}

export default NotificationList;
