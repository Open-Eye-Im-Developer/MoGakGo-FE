import { z } from "zod";

import { WantedJobLabelEnum } from "../constants";

export const editFormSchema = z.object({
  username: z.string().min(1, { message: "닉네임은 최소 1자 이상 입니다." }),
  bio: z.string().max(50).optional(),
  avatarUrl: z.string(),
  // avatar: z.instanceof(File).optional(),
  // isResetAvator: z.boolean().optional(),
  // developLanguages: z.array(z.string()),
  wantedJobs: z
    .array(WantedJobLabelEnum)
    .min(1, { message: "최소 1개 이상의 관심 직무를 선택해주세요." })
    .max(3),
  achievementId: z.number(),
});
