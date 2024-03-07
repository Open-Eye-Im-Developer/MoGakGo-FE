import { useQuery } from "@tanstack/react-query";

import { getSignUpUser } from "@/app/_common/api/auth";

export const useQueryUserData = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: getSignUpUser,
    queryKey: ["getSignUpUser"],
    throwOnError: false,
  });

  return { data, isLoading, isError };
};
