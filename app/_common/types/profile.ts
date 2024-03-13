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
