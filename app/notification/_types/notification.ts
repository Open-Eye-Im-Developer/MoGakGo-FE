import { StaticImport } from "next/dist/shared/lib/get-img-props";

import ReviewImage from "@/public/images/review.svg";
import RequestImage from "@/public/images/request.svg";
import SuccessedImage from "@/public/images/matching_successed.svg";
import FailedImage from "@/public/images/matching_failed.svg";
import AchievementImage from "@/public/images/achievement.svg";

export interface NotificationType {
  id: number;
  tag: NotificaitonTagType;
  message: string;
  data?: {
    projectId?: number;
    receiverId?: number;
    achievementId?: number;
  };
  createdAt: string;
}

export type NotificaitonTagType =
  | "REVIEW_REQUEST"
  | "REQUEST_ARRIVAL"
  | "ACHIEVEMENT"
  | "MATCHING_SUCCESSED"
  | "MATCHING_FAILED";

export const NotificationTitle: {
  [key in NotificaitonTagType]: { message: string; image: StaticImport };
} = {
  REVIEW_REQUEST: {
    message: "리뷰작성",
    image: ReviewImage,
  },
  REQUEST_ARRIVAL: {
    message: "찔러보기 도착",
    image: RequestImage,
  },
  ACHIEVEMENT: {
    message: "업적 달성",
    image: AchievementImage,
  },
  MATCHING_SUCCESSED: {
    message: "매칭 성공",
    image: SuccessedImage,
  },
  MATCHING_FAILED: {
    message: "매칭 실패",
    image: FailedImage,
  },
};
