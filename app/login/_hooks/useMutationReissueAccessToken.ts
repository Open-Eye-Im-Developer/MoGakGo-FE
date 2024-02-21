import { useMutation } from "@tanstack/react-query";

// import { reIssueAccessToken } from "@/app/_common/api/auth";

import { useUserStore } from "@/app/signup/_store/useUserStore";
import { reIssueAccessToken } from "@/app/_common/api/auth";

import { reIssueAccessTokenResponse } from "./../_types/login.types";

// import { getLoginSuccess } from "@/app/_common/api/auth";

// import { useQueryGithubLoginUrl } from "./useQueryGithubLoginUrl";

export const useMutationReIssueAccessToken = () => {
  const { setAccessToken } = useUserStore();

  const { mutate } = useMutation<reIssueAccessTokenResponse>({
    mutationFn: reIssueAccessToken,
    onSuccess: data => {
      setAccessToken(data.accessToken);
    },
  });

  return { mutate };
};
