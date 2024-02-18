import { useQuery } from "@tanstack/react-query";

import { getUser } from "@/app/_common/api/auth";

import { User } from "../_type/signup.types";

export const useQueryUser = () => {
  const { data, isLoading } = useQuery<User>({
    queryFn: getUser,
    queryKey: ["user"],
  });

  return { data, isLoading };
};
