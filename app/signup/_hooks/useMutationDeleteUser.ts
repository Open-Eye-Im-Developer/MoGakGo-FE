import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUserStore } from "@/app/_common/store/useUserStore";
import { deleteUser } from "@/app/_common/api/auth";

export const useMutationDeleteUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      useUserStore.persist.clearStorage();

      toast.error("회원탈퇴가 완료되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      router.push("/");
    },
    onError: error => {
      toast.error("존재하지 않는 회원입니다.");
      console.error(error);
    },
  });

  return { mutate };
};
