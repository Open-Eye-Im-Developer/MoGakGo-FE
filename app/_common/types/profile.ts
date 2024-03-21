import { WantedJobs } from "./user";

export interface Creator {
  id: number;
  username: string;
  githubId: string;
  avatarUrl: string;
  githubUrl: string;
  bio?: string;
  jandiRate: number;
  achievementId: number;
  developLanguages: string[];
  wantedJobs: WantedJobs[];
}

export interface LikeCount {
  userId: number;
  likeCount: number;
}

export interface Like {
  id: number;
  receiverId: number;
  username: string;
  avatarUrl: string;
  createdAt: string;
}
export interface Profile {
  response: Creator;
  requestYn?: boolean;
}

export interface ProfileLikeInfo {
  senderId: number;
  receiverId: number;
}
