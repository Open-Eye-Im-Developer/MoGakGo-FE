import { useQuery } from "@tanstack/react-query";

import { getSignUpUser } from "@/app/_common/api/auth";

export const useQueryUserData = () => {
  return useQuery({
    queryFn: getSignUpUser,
    throwOnError: false,
    queryKey: ["getSignUpUser"],
  });
};
