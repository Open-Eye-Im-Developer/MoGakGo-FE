import { WantedJobIds } from "@/app/my-page/types";

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
  wantedJobs: WantedJobIds[];
}

export interface Like {
  userId: number;
  likeCount: number;
}
