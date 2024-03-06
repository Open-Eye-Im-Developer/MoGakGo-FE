export interface NotificationType {
  tag: NotificaitonType;
  sender: {
    name: string;
    id?: string;
    profileImage: string;
  };
  data: {
    detail: string;
    createdAt: string;
  };
}

export type NotificaitonType =
  | "REVIEW_REQUEST"
  | "REQUEST_ARRIVAL"
  | "ACHIEVEMENT"
  | "MATCHING_SUCCESSED"
  | "MATCHING_FAILED";
