import { useQuery } from "@tanstack/react-query";

import { getSignUpUser } from "@/app/_common/api/auth";

import { SignUpUser } from "../_type/signup";

export const useQuerySignUpUser = (hasAccessToken = true) => {
  const { data, isLoading } = useQuery<SignUpUser>({
    queryFn: getSignUpUser,
    queryKey: ["user"],
    enabled: hasAccessToken,
  });

  return { data, isLoading };
};
