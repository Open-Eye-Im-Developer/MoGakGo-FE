import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";

import { instance } from "@/app/_common/api/instance";

import { ResponseData } from "@/app/_common/types/response";

import { NotificationType } from "../_types/notification";

export const getNotifications = async (pageId: number) => {
  const { data } = await instance.get<ResponseData<NotificationType>>(
    "/notification",
    {
      params: { pageSize: 10, pageId },
    },
  );
  return data;
};

export const storeFCMToken = async (token: string) => {
  const { data } = await instance.post<NotificationType[]>(
    "/notification/fcm",
    {
      fcmToken: token,
    },
  );
  return data;
};

export const getFCMToken = async () => {
  const firebaseApp = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  });
  const messaging = getMessaging(firebaseApp);

  getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FCM_VAPID_KEY,
  })
    .then(currentToken => {
      storeFCMToken(currentToken);
    })
    .catch(err => {
      throw new Error(err);
    });
};
