export interface NotificationType {
  tag: "REVIEW_REQUEST" | "REQUEST_ARRIVAL";
  sender: {
    name: string;
    id?: string;
    profileImage: string;
  };
  data: {
    detail: string;
    created_at: string;
  };
}
