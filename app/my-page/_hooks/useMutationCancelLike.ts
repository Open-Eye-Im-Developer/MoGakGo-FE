import { toast } from "sonner";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cancelLike } from "@/app/_common/api/profile";

export const useMutationCancelLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelLike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getLikes"],
      });
      toast.success("찔러보기을 취소했습니다.");
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      toast.error(error.message);
    },
  });
};
