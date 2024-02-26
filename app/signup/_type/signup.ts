import { WantedJobs } from "@/app/_common/types/user";

export interface SignUpUser {
  id: number;
  username: string;
  githubId: string;
  avatarUrl: string;
  githubUrl: string;
  bio?: string;
  jandiRate?: number;
  achievementTitle?: string;
  developLanguages?: string[];
  wantedJobs?: WantedJobs[];
}

export interface SignupRequest {
  username: string;
  wantedJobs: WantedJobs[];
}
