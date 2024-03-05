import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postReview } from "@/app/_common/api/project";

export const useMutationReview = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postReview,
    mutationKey: ["review"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["project", "user"],
      });

      router.push("/");
    },
    onError: error => {
      console.error(error);
    },
  });

  return mutation;
};
