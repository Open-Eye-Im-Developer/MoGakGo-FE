"use client";

import { Button } from "@/app/_common/shadcn/ui/button";

import AnnounceEmptyActive from "@/app/_common/components/AnnounceEmptyNotification";
import ActivityCardSkeleton from "@/app/_common/components/ActivityCardSkeleton";

import { NotificationType } from "../_types/notification";
import Notification from "../_components/Notification";
import notificationEmptyAnimaiton from "../_assets/notification.json";
import useGetNotifications from "../_api/useGetNotifications";

function NotificationList() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetNotifications();

  if (isLoading)
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <ActivityCardSkeleton key={index} />
        ))}
      </div>
    );

  const notifications = data?.pages.map(page => (page ? page.data : [])).flat();

  return (
    <>
      {notifications?.length ? (
        <>
          {[...notifications]
            .reverse()
            .map((notification: NotificationType) => (
              <Notification notification={notification} key={notification.id} />
            ))}
          <Button
            className="w-full"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isLoading}
          >
            더보기
          </Button>
        </>
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
