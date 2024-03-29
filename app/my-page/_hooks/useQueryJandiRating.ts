import { useQuery } from "@tanstack/react-query";

import { getJandiRatingByUserId } from "@/app/_common/api/user";

import { UserJandiRating } from "@/app/_common/types/user";

export const useQueryJandiRating = (userId?: number) => {
  return useQuery<UserJandiRating | undefined>({
    queryFn: () => getJandiRatingByUserId(userId),
    queryKey: ["getJandiRatingByUserId", userId],
    enabled: typeof userId === "number",
  });
};
