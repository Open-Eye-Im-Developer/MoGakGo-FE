import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { deleteUser } from "@/app/_common/api/auth";

import { sonner } from "../../utils/sonner";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      useAuthStore.persist.clearStorage();

      sonner.error("회원탈퇴가 완료되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      router.push("/");
    },
    onError: error => {
      sonner.error("존재하지 않는 회원입니다.");
      console.error(error);
    },
  });

  return { mutate };
};
