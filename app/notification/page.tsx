"use client";
import React from "react";

import StackNavigator from "../_common/components/StackNavigator";
import { NotificationType } from "./_types/notification";
import Notification from "./_components/Notification";
import useGetNotifications from "./_api/useGetNotifications";
function Page() {
  const { data: notificaitons } = useGetNotifications();

  return (
    <>
      <StackNavigator title={"알림"} />
      {notificaitons?.map((notification: NotificationType, index: number) => (
        <div key={index.toString()}>
          <Notification notification={notification} />
        </div>
      ))}
    </>
  );
}
export default Page;
