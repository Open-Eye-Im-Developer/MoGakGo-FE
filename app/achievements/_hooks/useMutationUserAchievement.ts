import { useMutation, useQueryClient } from "@tanstack/react-query";

import { patchUserAchievement } from "@/app/_common/api/achievements";

export const useMutationUserAchievement = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchUserAchievement,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["achievements", "user"],
      });
    },
    onError: error => {
      console.error(error);
    },
  });

  return mutation;
};
