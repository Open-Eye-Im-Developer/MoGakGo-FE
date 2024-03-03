import { useQuery } from "@tanstack/react-query";

import { getReceiveLikeCount } from "@/app/_common/api/profile";

import { Like } from "@/app/_common/types/profile";

export const useQueryMyReceiveLikeCount = (userId?: number) => {
  const { data, isLoading } = useQuery<Like | undefined>({
    queryFn: () => getReceiveLikeCount(userId),
    queryKey: ["getReceiveLikeCount", userId],
    enabled: typeof userId === "number",
  });

  return { data, isLoading };
};
