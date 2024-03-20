import { useQuery } from "@tanstack/react-query";

import { getSendLikeCount } from "@/app/_common/api/profile";

import { LikeCount } from "@/app/_common/types/profile";

export const useQuerySendLikeCount = (userId?: number) => {
  return useQuery<LikeCount | undefined>({
    queryFn: () => getSendLikeCount(userId),
    queryKey: ["getSendLikeCount", userId],
    enabled: typeof userId === "number",
  });
};
