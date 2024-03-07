import { useMutation, useQueryClient } from "@tanstack/react-query";

import { patchUserAchievement } from "@/app/_common/api/achievements";

export const useMutationUserAchievements = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchUserAchievement,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["achievement", "user"],
      });
    },
    onError: error => {
      console.error(error);
    },
  });

  return mutation;
};
