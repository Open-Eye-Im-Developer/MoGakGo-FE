import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser } from "@/app/_common/api/user";

import { toast } from "@/app/_common/utils/toast";

export const useMutationUpdateUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.info("프로필을 수정했습니다.");
      router.push("/my-page");
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      toast.error(error.message);
    },
  });
};
