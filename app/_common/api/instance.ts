import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useReIssueToken } from "../hooks/useReIssueToken";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVER_VERSION = "/api/v1";

export const instance = axios.create({
  baseURL: `${BASE_URL}${SERVER_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(config => {
  const accessToken =
    localStorage.getItem("accessToken") ??
    sessionStorage.getItem("accessToken");

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const { config, response } = error;
    const router = useRouter();

    if (response?.status !== 401 || config.sent) {
      return Promise.reject(error);
    }

    if (response?.status === 404) {
      toast.error("인증이 만료되었습니다. 재로그인이 필요합니다.");

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      router.push("/login");

      return Promise.reject(error);
    }

    config.sent = true;

    const { reissue } = useReIssueToken();
    const accessToken = await reissue();

    if (!accessToken) {
      toast.error("인증이 만료되었습니다. 재로그인이 필요합니다.");

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      router.push("/login");

      return Promise.reject(error);
    }

    localStorage.setItem("accessToken", accessToken);

    config.headers.Authorization = `Bearer ${accessToken}`;

    return instance(config);
  },
);
