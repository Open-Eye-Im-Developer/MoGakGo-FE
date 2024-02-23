import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useMutationReIssueAccessToken } from "@/app/login/_hooks/useMutationReissueAccessToken";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVER_VERSION = "/api/v1";

export const instance = axios.create({
  baseURL: `${BASE_URL}${SERVER_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  config => {
    const accessToken =
      localStorage.getItem("accessToken") ??
      sessionStorage.getItem("accessToken");

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  error => {
    const { config, status } = error;
    const router = useRouter();

    const refreshToken =
      localStorage.getItem("refreshToken") ??
      sessionStorage.getItem("refreshToken");

    if (status === 401) {
      // accessToken 만료 시, accessToken 재발급 요청
      useMutationReIssueAccessToken().mutate({ refreshToken });

      return instance(config);
    }

    if (status === 404) {
      if (config.url === "user" && config.method === "delete") {
        toast.error("인증이 만료되었습니다. 재로그인이 필요합니다.");

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        router.push("/login");

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  // 에러 처리
  async error => {
    return Promise.reject(error);
  },
);
