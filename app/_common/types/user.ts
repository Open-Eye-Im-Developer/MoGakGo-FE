import { WANTED_JOB } from "../constants/wantedJob";

export type Region =
  | "종로구"
  | "중구"
  | "용산구"
  | "성동구"
  | "광진구"
  | "동대문구"
  | "중랑구"
  | "성북구"
  | "강북구"
  | "도봉구"
  | "노원구"
  | "은평구"
  | "서대문구"
  | "마포구"
  | "양천구"
  | "강서구"
  | "구로구"
  | "금천구"
  | "영등포구"
  | "동작구"
  | "관악구"
  | "서초구"
  | "강남구"
  | "송파구"
  | "강동구"
  | "분당구"
  | "판교";

export type WantedJobs = (typeof WANTED_JOB)[number]["id"];

export interface User {
  achievementId?: Achievement["achievementId"];
  region?: Region;
  region_authentication_at?: string;
  available_join_count?: number;
  available_like_count?: number;
  created_at?: string;
  deleted_at?: string;
}

export interface UserWantedJob {
  id: string;
  userId: string;
  wantedJobs: WantedJobs[];
}

export interface UserJandiRating {
  userId: number;
  jandiRate: number;
}

export interface UserAchievement {
  achievementId: Achievement["achievementId"];
  achievementTitle: Achievement["title"];
  achievementImageUrl: Achievement["imgUrl"];
}

export interface Achievement {
  userId: number;
  achievementId: number;
  title: string;
  imgUrl: string;
  description: string;
  requirementValue: number;
  requirementType?: "SEQUENCE" | "ACCUMULATE";
  progressCount: number;
  progressLevel: number;
  completed?: boolean;
}

export interface AchievementDetail {
  achievementId: number;
  title: string;
  imgUrl: string;
  description: string;
  requirementType: string;
  requirementValue: number;
}

export interface DevelopLanguage {
  language: string;
  byteSize: number;
  imageUrl: string;
}
