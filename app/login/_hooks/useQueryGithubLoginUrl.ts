import { useQuery } from "@tanstack/react-query";

import { getGithubLoginUrl } from "@/app/_common/api/auth";

import { GithubUrlResponse } from "../_types/login.types";

export const useQueryGithubLoginUrl = () => {
  const {
    data: response,
    isLoading,
    isError,
    isSuccess,
  } = useQuery<GithubUrlResponse>({
    queryKey: ["github-login-url"],
    queryFn: getGithubLoginUrl,
  });

  return { response, isLoading, isError, isSuccess };
};
