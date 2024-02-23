import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUserStore } from "@/app/_common/store/useUserStore";
import { patchSignup } from "@/app/_common/api/auth";

import { SignUpUser } from "../_type/signup";

export const useMutationSignup = (
  accessToken: string,
  refreshToken: string,
) => {
  const queryClient = useQueryClient();
  const { setUser } = useUserStore();

  const { mutate } = useMutation({
    mutationFn: patchSignup,
    onSuccess: (data: SignUpUser) => {
      const { id, username, githubId, avatarUrl, githubUrl } = data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");

      setUser({ id, username, githubId, avatarUrl, githubUrl });

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: error => {
      console.log(error);
    },
  });

  return { mutate };
};
