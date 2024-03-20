import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { patchSignup } from "@/app/_common/api/auth";

import { setCookie } from "@/app/_common/utils/cookie";

import { Language, SignUpUser } from "../_type/signup";

export const useMutationSignup = (
  accessToken: string,
  refreshToken: string,
  developLanguages: Language[],
) => {
  const queryClient = useQueryClient();
  const { setUser } = useAuthStore();

  const { mutate } = useMutation({
    mutationFn: patchSignup,
    onSuccess: (data: SignUpUser) => {
      localStorage.setItem("accessToken", accessToken);
      setCookie("refreshToken", refreshToken, {
        httpOnly: true,
        "max-age": 60 * 60 * 24 * 14,
        path: "/",
      });

      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");

      setUser({
        ...data,
        developLanguages: developLanguages.map(obj => obj.language),
      });

      queryClient.invalidateQueries({
        queryKey: ["user", "develop-language"],
      });
    },
    onError: error => {
      console.log(error);
    },
  });

  return { mutate };
};
