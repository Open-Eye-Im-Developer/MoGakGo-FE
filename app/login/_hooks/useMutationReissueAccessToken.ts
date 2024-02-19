import { useMutation } from "@tanstack/react-query";

// import { reIssueAccessToken } from "@/app/_common/api/auth";

import { setAccessToken } from "@/app/signup/_store/setAccessToken";

import { reIssueAccessTokenResponse } from "./../_types/login.types";

// import { getLoginSuccess } from "@/app/_common/api/auth";

// import { useQueryGithubLoginUrl } from "./useQueryGithubLoginUrl";

export const useMutationReIssueAccessToken = () => {
  // const { isSuccess: isLoginSuccess } = useQueryGithubLoginUrl();

  const { mutate } = useMutation<reIssueAccessTokenResponse>({
    // mutationFn: async () => await reIssueAccessToken(),
    onSuccess: data => {
      setAccessToken(data.accessToken);
    },
  });

  return { mutate };
};
