import { z } from "zod";

import { UserType, WantedJobIds } from "./types";

export const WANTED_JOB: { id: WantedJobIds; label: string }[] = [
  { id: "BACKEND", label: "서버/백엔드" },
  { id: "FRONTEND", label: "프론트엔드" },
  { id: "FULLSTACK", label: "풀스택" },
  { id: "ANDROID", label: "안드로이드" },
  { id: "IOS", label: "iOS" },
  { id: "MACHINE_LEARNING", label: "머신러닝" },
  { id: "ARTIFICIAL_INTELLIGENCE", label: "인공지능(AI)" },
  { id: "DATA_ENGINEER", label: "데이터 엔지니어링" },
  { id: "DBA", label: "DBA" },
  { id: "MOBILE_GAME", label: "모바일 게임" },
  { id: "SYSTEM_NETWORK", label: "시스템/네트워크" },
  { id: "SYSTEM_SW", label: "시스템 소프트웨어" },
  { id: "DEVOPS", label: "데브옵스" },
  { id: "INTERNET_SECURITY", label: "인터넷 보안" },
  { id: "EMBEDDED_SOFTWARE", label: "임베디드 소프트웨어" },
  { id: "ROBOTICS_MIDDLEWARE", label: "로보틱스 미들웨어" },
  { id: "QA", label: "QA" },
  { id: "IOT", label: "IoT" },
  { id: "APPLICATION_SW", label: "응용 소프트웨어" },
  { id: "BLOCKCHAIN", label: "블록체인" },
  { id: "PROJECT_MANAGEMENT", label: "PM" },
  { id: "WEB_PUBLISHING", label: "웹 퍼블리싱" },
  { id: "CROSS_PLATFORM", label: "크로스 플랫폼" },
  { id: "VR_AR_3D", label: "VR/AR/3D" },
  { id: "ERP", label: "ERP" },
  { id: "GRAPHICS", label: "그래픽스" },
];

export const WantedJobLabelEnum = z.enum([
  "BACKEND",
  "FRONTEND",
  "FULLSTACK",
  "ANDROID",
  "IOS",
  "MACHINE_LEARNING",
  "ARTIFICIAL_INTELLIGENCE",
  "DATA_ENGINEER",
  "DBA",
  "MOBILE_GAME",
  "SYSTEM_NETWORK",
  "SYSTEM_SW",
  "DEVOPS",
  "INTERNET_SECURITY",
  "EMBEDDED_SOFTWARE",
  "ROBOTICS_MIDDLEWARE",
  "QA",
  "IOT",
  "APPLICATION_SW",
  "BLOCKCHAIN",
  "PROJECT_MANAGEMENT",
  "WEB_PUBLISHING",
  "CROSS_PLATFORM",
  "VR_AR_3D",
  "ERP",
  "GRAPHICS",
]);

export const DUMMY_USER_DATA: UserType = {
  username: "bel1c10ud",
  avatarUrl: "",
  bio: undefined,
  developLanguages: [],
  wantedJobs: ["FRONTEND", "FULLSTACK"],
  achievementId: "0",
};
