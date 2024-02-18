import { useQuery } from "@tanstack/react-query";

import { getGithubLoginUrl } from "@/app/_common/api/auth";

export const useQueryGithubLoginUrl = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["github-login-url"],
    queryFn: getGithubLoginUrl,
  });

  return { data, isLoading, isError, isSuccess };
};
