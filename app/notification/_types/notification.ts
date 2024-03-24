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
  [key in NotificaitonTag]: {
    message: string;
    image: string;
    color?: "text-neoBlue" | "text-neoRed";
  };
} = {
  REVIEW_REQUEST: {
    message: "리뷰 요청",
    image: "alert-jandi",
    color: "text-neoBlue",
  },
  REQUEST_ARRIVAL: {
    message: "매칭 참여 요청",
    image: "alert-follow",
    color: "text-neoBlue",
  },
  ACHIEVEMENT: {
    message: "업적 겟또",
    image: "achievement",
    color: "text-neoBlue",
  },
  MATCHING_SUCCESS: {
    message: "매칭 성공",
    image: "match-accept",
    color: "text-neoRed",
  },
  MATCHING_FAILED: {
    message: "매칭 실패",
    image: "match-fail",
    color: "text-neoRed",
  },
};
