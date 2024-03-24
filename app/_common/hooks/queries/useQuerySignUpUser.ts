import { useQuery } from "@tanstack/react-query";

import { getSignUpUser } from "@/app/_common/api/auth";

export const useQuerySignUpUser = (hasAccessToken = true) => {
  return useQuery({
    queryFn: getSignUpUser,
    queryKey: ["user"],
    enabled: hasAccessToken,
  });
};
