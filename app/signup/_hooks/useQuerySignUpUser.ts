import { useQuery } from "@tanstack/react-query";

import { getSignUpUser } from "@/app/_common/api/auth";

import { SignUpUser } from "../_type/signup.types";

export const useQuerySignUpUser = () => {
  const { data, isLoading } = useQuery<SignUpUser>({
    queryFn: getSignUpUser,
    queryKey: ["user"],
  });

  return { data, isLoading };
};
