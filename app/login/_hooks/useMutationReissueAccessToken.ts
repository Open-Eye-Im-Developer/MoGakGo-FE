import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { reIssueAccessToken } from "@/app/_common/api/auth";

export const useMutationReIssueAccessToken = () => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: reIssueAccessToken,
    onSuccess: data => {
      localStorage.setItem("accessToken", data.accessToken);
    },
    onError: error => {
      console.error(error.message);

      toast.error("인증이 만료되었습니다. 재로그인이 필요합니다.");
      router.push("/login");
    },
  });

  return { mutate };
};
