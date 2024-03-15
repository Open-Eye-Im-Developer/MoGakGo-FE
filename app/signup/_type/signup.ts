import { WantedJobType } from "@/app/_common/constants/wantedJob.constants";

import { UserAchievement } from "@/app/_common/types/user";

export interface Language {
  // TODO: 백엔드 서버에서 image 파일 구축이 완료되면 주석 해제
  // image: string;
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
  wantedJobs?: WantedJobType[];
}

export interface SignupRequest {
  username: string;
  wantedJobs: WantedJobType[];
}
