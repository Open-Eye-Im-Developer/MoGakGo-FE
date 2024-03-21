import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { postLogin } from "@/app/_common/api/auth";

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
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (code: string) => postLogin(code),
    onSuccess: (data: LoginResponse) => {
      if (data.signUpComplete) {
        saveUpdatedTokens(data.accessToken, data.refreshToken);
        router.push("/");
      } else {
        saveNewTokens(data.accessToken, data.refreshToken);
        router.push("/signup");
      }
    },
    onError: () => {
      console.error("로그인 에러 발생");
    },
  });

  return mutation;
};
