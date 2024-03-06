export type MatchStatus = "PENDING" | "MATCHED" | "CANCELED" | "FINISHED";

export interface Match {
  matchingId: number;
  status: MatchStatus;
  anotherUserAvatarUrl: string;
  projectLocationDetail: string;
  projectStartTime: string;
  projectEndTime: string;
}
