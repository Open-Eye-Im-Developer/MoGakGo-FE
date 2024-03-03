import { useQuery } from "@tanstack/react-query";

import { getJandiRatingByUserId } from "@/app/_common/api/user";

import { UserJandiRating } from "@/app/_common/types/user";

export const useQueryMyJandiRating = (userId?: number) => {
  const { data, isLoading } = useQuery<UserJandiRating | undefined>({
    queryFn: () => getJandiRatingByUserId(userId),
    queryKey: ["getSendLikeCount", userId],
    enabled: typeof userId === "number",
  });

  return { data, isLoading };
};
