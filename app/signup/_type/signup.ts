import { WantedJobs } from "@/app/_common/types/user";

export interface Language {
  // TODO: 백엔드 서버에서 image 파일 구축이 완료되면 주석 해제
  // image: string;
  language: string;
  byteSize: number;
}

export interface SignUpUser {
  id: number;
  username: string;
  githubId: string;
  avatarUrl: string;
  githubUrl: string;
  bio?: string;
  developLanguages?: string[];
  jandiRate?: number;
  achievementTitle?: string;
  wantedJobs?: WantedJobs[];
}

export interface SignupRequest {
  username: string;
  wantedJobs: WantedJobs[];
}
