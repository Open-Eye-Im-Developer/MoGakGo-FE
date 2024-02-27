import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { reIssueAccessToken } from "../api/auth";

export const useReIssueToken = () => {
  const router = useRouter();

  const reissue = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const result = await reIssueAccessToken({ refreshToken });

      const { accessToken } = result;

      return accessToken;
    } catch (error) {
      console.error(error);

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      toast.error("인증이 만료되었습니다. 재로그인이 필요합니다.");
      router.push("/login");
    }
  };

  return { reissue };
};
