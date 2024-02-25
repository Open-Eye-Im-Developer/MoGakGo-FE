export type WantedJobIds =
  | "BACKEND"
  | "FRONTEND"
  | "FULLSTACK"
  | "ANDROID"
  | "IOS"
  | "MACHINE_LEARNING"
  | "ARTIFICIAL_INTELLIGENCE"
  | "DATA_ENGINEER"
  | "DBA"
  | "MOBILE_GAME"
  | "SYSTEM_NETWORK"
  | "SYSTEM_SW"
  | "DEVOPS"
  | "INTERNET_SECURITY"
  | "EMBEDDED_SOFTWARE"
  | "ROBOTICS_MIDDLEWARE"
  | "QA"
  | "IOT"
  | "APPLICATION_SW"
  | "BLOCKCHAIN"
  | "PROJECT_MANAGEMENT"
  | "WEB_PUBLISHING"
  | "CROSS_PLATFORM"
  | "VR_AR_3D"
  | "ERP"
  | "GRAPHICS";

export interface UserType {
  username: string;
  avatarUrl: string;
  bio?: string;
  developLanguages: string[];
  wantedJobs: WantedJobIds[];
  achievementId: string;
}

export interface EditFormType extends Omit<UserType, "avatarUrl"> {
  avatar?: File;
  isResetAvator?: boolean;
}
