import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { SignUpUser } from "@/app/signup/_type/signup";
import { patchUserAchievement } from "@/app/_common/api/achievements";

import { toast } from "@/app/_common/utils/toast";

export const useMutationUserAchievement = (
  setIsMyAchievement: Dispatch<SetStateAction<boolean>>,
  userId: SignUpUser["id"],
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchUserAchievement,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["achievements", userId],
      });

      toast.success("업적 변경이 완료 됐습니다.");

      setIsMyAchievement(true);
    },
    onError: error => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return mutation;
};
