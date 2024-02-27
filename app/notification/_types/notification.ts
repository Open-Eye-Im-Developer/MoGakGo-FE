export interface NotificationType {
  tag: "REVIEW_REQUEST" | "REQUEST_ARRIVAL";
  sender: {
    name: string;
    id?: string;
    profile_image: string;
  };
  data: {
    detail: string;
    created_at: string;
  };
}
