import { z } from "zod";

// labels 배열을 z.enum에 전달하여 enum 타입 생성
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

export const SignupFormSchema = z.object({
  username: z.string().min(2).max(20),
  wanted_job: z.array(WantedJobLabelEnum).refine(value => value.length > 0, {
    message: "최소 1개의 관심 직무를 선택해주세요.",
  }),
  bio: z.string().max(50).optional(),
  github_id: z.string(),
  avatar_url: z.string(),
  github_url: z.string(),
});
