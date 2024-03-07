import { useQuery } from "@tanstack/react-query";

import { getSendLikeCount } from "@/app/_common/api/profile";

import { Like } from "@/app/_common/types/profile";

export const useQueryMySendLikeCount = (userId?: number) => {
  const { data, isLoading } = useQuery<Like | undefined>({
    queryFn: () => getSendLikeCount(userId),
    queryKey: ["getSendLikeCount", userId],
    enabled: typeof userId === "number",
  });

  return { data, isLoading };
};
