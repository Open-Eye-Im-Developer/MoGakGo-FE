import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteUser } from "@/app/_common/api/auth";

export const useMutationDeleteUser = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.error("회원탈퇴가 완료되었습니다.");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: () => {
      console.error("회원탈퇴에 실패했습니다.");
    },
  });

  return { mutate };
};
