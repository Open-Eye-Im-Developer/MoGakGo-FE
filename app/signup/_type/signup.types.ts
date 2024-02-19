import {
  WANTED_JOB,
  WantedJobType,
} from "@/app/_common/constants/wantedJob.constants";

type Region =
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
  | "기타";

type WantedJob = (typeof WANTED_JOB)[number]["id"];

export interface User {
  id: string;
  username: string;
  github_id: string;
  avatar_url: string;
  github_url: string;
  bio?: string;
  jandi_rating?: number;
  region?: Region;
  region_authentication_at?: string;
  available_join_count?: number;
  available_like_count?: number;
  created_at: string;
  deleted_at: string;
}

export interface UserWantedJob {
  id: string;
  user_id: string;
  wanted_job: WantedJob[];
}

export interface SignupRequest {
  username: string;
  wanted_job: WantedJobType[];
}
