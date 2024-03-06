import { z } from "zod";

import { editFormSchema } from "./_util/validation";

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

export const DUMMY_USER_DATA: z.infer<typeof editFormSchema> = {
  username: "bel1c10ud",
  avatarUrl: "https://avatars.githubusercontent.com/u/86952779?v=4",
  bio: undefined,
  wantedJobs: ["FRONTEND", "FULLSTACK"],
  achievementId: 2,
};
