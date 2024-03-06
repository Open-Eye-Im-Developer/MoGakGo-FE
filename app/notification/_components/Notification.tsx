import React from "react";

import ActivityCard from "@/app/_common/components/ActivityCard";

import { NotificationType } from "../_types/notification";

interface NotificationProps {
  notification: NotificationType;
}

function Notification({ notification }: NotificationProps) {
  const { sender, data } = notification;
  const { name, profileImage } = sender;
  const { detail, createdAt } = data;

  return (
    <ActivityCard
      name={name}
      profileImage={profileImage}
      detail={detail}
      createdAt={createdAt}
    />
  );
}
export default Notification;
