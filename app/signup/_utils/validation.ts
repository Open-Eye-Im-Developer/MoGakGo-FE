import { z } from "zod";

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
});
