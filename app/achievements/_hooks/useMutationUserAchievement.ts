import { Dispatch, SetStateAction } from "react";
import { useMutation } from "@tanstack/react-query";

import { patchUserAchievement } from "@/app/_common/api/achievements";

import { Achievement } from "@/app/_common/types/user";

import { toast } from "@/app/_common/utils/toast";

export const useMutationUserAchievement = (
  setMyAchievement: Dispatch<SetStateAction<Achievement | undefined>>,
) => {
  const mutation = useMutation({
    mutationFn: patchUserAchievement,
    onSuccess: newAchievement => {
      toast.success("업적 변경이 완료 됐습니다.");
      setMyAchievement(newAchievement);
    },
  });

  return mutation;
};
