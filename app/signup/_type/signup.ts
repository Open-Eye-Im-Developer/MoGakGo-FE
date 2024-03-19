import { UserAchievement, WantedJobs } from "@/app/_common/types/user";

export interface Language {
  imageUrl: string;
  language: string;
  byteSize: number;
}

export interface SignUpUser extends UserAchievement {
  id: number;
  username: string;
  githubId: string;
  avatarUrl: string;
  githubUrl: string;
  bio?: string;
  developLanguages?: string[];
  jandiRate?: number;
  wantedJobs?: WantedJobs[];
}

export interface SignupRequest {
  username: string;
  wantedJobs: WantedJobs[];
}
