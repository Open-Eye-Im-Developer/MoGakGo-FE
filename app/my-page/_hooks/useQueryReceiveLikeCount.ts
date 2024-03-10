import { useQuery } from "@tanstack/react-query";

import { getReceiveLikeCount } from "@/app/_common/api/profile";

import { LikeCount } from "@/app/_common/types/profile";

export const useQueryReceiveLikeCount = (userId?: number) => {
  return useQuery<LikeCount | undefined>({
    queryFn: () => getReceiveLikeCount(userId),
    queryKey: ["getReceiveLikeCount", userId],
    enabled: typeof userId === "number",
  });
};
