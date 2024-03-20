import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cancelLike } from "@/app/_common/api/profile";

import { toast } from "@/app/_common/utils/toast";

export const useMutationCancelLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelLike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getLikes"],
      });
      toast.success("찔러보기를 취소했습니다.");
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      toast.error(error.message);
    },
  });
};
