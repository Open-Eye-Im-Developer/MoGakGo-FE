export type MatchStatus = "PENDING" | "PROGRESS" | "FINISHED";
// TODO: 타입 보완 필요

export interface Match {
  matchingId: number;
  status: MatchStatus;
  anotherUserAvatarUrl: string;
  projectLocationDetail: string;
  projectStartTime: string;
  projectEndTime: string;
}
