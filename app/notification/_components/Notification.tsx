import React from "react";

import ActivityCard from "@/app/_common/components/ActivityCard";

import { NotificationType } from "../_types/notification";

interface NotificationProps {
  notification: NotificationType;
}

function Notification({ notification }: NotificationProps) {
  const { sender, data } = notification;
  const { name, profile_image } = sender;
  const { detail, created_at } = data;

  return (
    <ActivityCard
      name={name}
      profile_image={profile_image}
      detail={detail}
      created_at={created_at}
    />
  );
}
export default Notification;
