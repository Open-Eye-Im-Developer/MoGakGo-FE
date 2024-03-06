import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cancelMatch } from "@/app/_common/api/matching";

export const useMutationMatchCancel = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: cancelMatch,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      router.push("/my-page");
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
  });

  return { mutate, isPending };
};
