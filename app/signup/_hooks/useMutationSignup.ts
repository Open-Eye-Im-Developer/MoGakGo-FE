import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postSignup } from "@/app/_common/api/auth";

import { SignupRequest } from "../_type/signup.types";

export const useMutationSignup = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: SignupRequest) => postSignup(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  return { mutate };
};
