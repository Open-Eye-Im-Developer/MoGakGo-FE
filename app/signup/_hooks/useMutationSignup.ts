import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { patchSignup } from "@/app/_common/api/auth";

import { SignUpUser } from "../_type/signup.types";
import { useSignUpStore } from "../_store/useSignUpStore";

export const useMutationSignup = (accessToken: string) => {
  const queryClient = useQueryClient();
  const { setAccessToken, setUser } = useSignUpStore();

  const { mutate } = useMutation({
    mutationFn: patchSignup,
    onSuccess: ({ data }: { data: SignUpUser }) => {
      toast.success("회원가입이 완료되었습니다.");

      setUser(data);
      setAccessToken(accessToken);

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: error => {
      console.log(error);
    },
  });

  return { mutate };
};
