import { StaticImport } from "next/dist/shared/lib/get-img-props";

import ReviewImage from "@/public/images/review.svg";
import RequestImage from "@/public/images/request.svg";
import SuccessedImage from "@/public/images/matching_successed.svg";
import FailedImage from "@/public/images/matching_failed.svg";
import AchievementImage from "@/public/images/achievement.svg";

import { NotificaitonTag } from "../_constant/notificaiton";

export interface NotificationType {
  id: number;
  tag: NotificaitonTag;
  message: string;
  data?: {
    projectId?: number;
    receiverId?: number;
    achievementId?: number;
  };
  createdAt: string;
}

export const NotificationTitle: {
  [key in NotificaitonTag]: { message: string; image: StaticImport };
} = {
  REVIEW_REQUEST: {
    message: "리뷰 요청",
    image: ReviewImage,
  },
  REQUEST_ARRIVAL: {
    message: "찔러보기",
    image: RequestImage,
  },
  ACHIEVEMENT: {
    message: "업적 겟또",
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
