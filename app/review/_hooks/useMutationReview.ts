import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postReview } from "@/app/_common/api/project";

import { sonner } from "@/app/_common/utils/sonner";

export const useMutationReview = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postReview,
    mutationKey: ["review"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      router.push("/my-page");
    },
    onError: error => {
      console.error(error);
      sonner.error(error.message);
    },
  });

  return mutation;
};
