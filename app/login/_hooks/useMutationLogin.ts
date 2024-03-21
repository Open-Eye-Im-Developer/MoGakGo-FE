import { useRouter } from "next/navigation";
import { QueryClient, useMutation } from "@tanstack/react-query";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { getSignUpUser, postLogin } from "@/app/_common/api/auth";

import { setCookie } from "@/app/_common/utils/cookie";

import { LoginResponse } from "../_types/login.types";

const saveNewTokens = (newAccessToken: string, newRefreshToken: string) => {
  sessionStorage.setItem("accessToken", newAccessToken);
  sessionStorage.setItem("refreshToken", newRefreshToken);
};

const saveUpdatedTokens = (newAccessToken: string, newRefreshToken: string) => {
  localStorage.setItem("accessToken", newAccessToken);

  setCookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    "max-age": 60 * 60 * 24 * 14,
    path: "/",
  });
};

export const useMutationLogin = () => {
  const { setUser } = useAuthStore();
  const queryClient = new QueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (code: string) => postLogin(code),
    onSuccess: async ({
      signUpComplete,
      accessToken,
      refreshToken,
    }: LoginResponse) => {
      if (signUpComplete) {
        saveUpdatedTokens(accessToken, refreshToken);
        router.push("/");
      } else {
        saveNewTokens(accessToken, refreshToken);
        router.push("/signup");
      }
      const userInfo = await queryClient.fetchQuery({
        queryFn: getSignUpUser,
        queryKey: ["getSignUpUser"],
      });
      setUser({ ...userInfo });
    },
    onError: () => {
      console.error("로그인 에러 발생");
    },
  });

  return mutation;
};
