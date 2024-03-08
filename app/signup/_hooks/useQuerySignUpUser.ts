import { useQuery } from "@tanstack/react-query";

import { getSignUpUser } from "@/app/_common/api/auth";

import { User } from "@/app/_common/types/user";

export const useQuerySignUpUser = (hasAccessToken = true) => {
  const { data, isLoading } = useQuery<User>({
    queryFn: getSignUpUser,
    queryKey: ["user"],
    enabled: hasAccessToken,
  });

  return { data, isLoading };
};
