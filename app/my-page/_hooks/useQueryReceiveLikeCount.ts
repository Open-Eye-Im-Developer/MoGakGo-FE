import { useQuery } from "@tanstack/react-query";

import { getReceiveLikeCount } from "@/app/_common/api/profile";

import { Like } from "@/app/_common/types/profile";

export const useQueryReceiveLikeCount = (userId?: number) => {
  return useQuery<Like | undefined>({
    queryFn: () => getReceiveLikeCount(userId),
    queryKey: ["getReceiveLikeCount", userId],
    enabled: typeof userId === "number",
  });
};
