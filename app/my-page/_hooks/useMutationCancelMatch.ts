import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cancelMatch } from "@/app/_common/api/matching";

import { toast } from "@/app/_common/utils/toast";

export const useMutationMatchCancel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelMatch,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "getMatchesByUserId",
          "getProjectListByCreatorId",
          "getProjectRequestsByCreatorId",
        ],
      });
      toast.success("매칭을 취소했습니다.");
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      toast.error(error.message);
    },
  });
};
