import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { postLogin } from "@/app/_common/api/auth";

import { reIssueAccessTokenResponse } from "../_types/login.types";

export const useMutationLogin = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (code: string) => postLogin(code),
    onSuccess: (data: reIssueAccessTokenResponse) => {
      if (data.signUpComplete) {
        localStorage.setItem("accessToken", data.accessToken);
        router.push("/");
      } else {
        sessionStorage.setItem("accessToken", data.accessToken);
        router.push("/signup");
      }
    },
  });

  return mutation;
};
