import { WantedJobs } from "./user";

export interface Creator {
  id: number;
  username: string;
  githubId: string;
  avatarUrl: string;
  githubUrl: string;
  bio: string;
  jandiRate: number;
  achievementTitle: string;
  developLanguages: string[];
  wantedJobs: WantedJobs[];
}

export interface Like {
  userId: number;
  likeCount: number;
}

export interface Profile {
  response: Creator;
  requestYn: boolean;
}

export interface ProfileLikeInfo {
  senderId: number;
  receiverId: number;
}
