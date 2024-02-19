import axios from "axios";

import { reIssueAccessToken } from "@/app/_common/api/auth";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVER_VERSION = "/api/v1";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const instance = axios.create({
  baseURL: `${BASE_URL}${SERVER_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

instance.interceptors.request.use(
  config => {
    // getLoginUrl과 같이 예외처리가 필요한 api 호출 시
    // ignoreGlobalCatch: true로 설정
    if (config.headers.ignoreGlobalCatch) {
      config.headers["Content-Type"] = "application/json";
      config.headers.Accept = "application/json";
      config.baseURL = `${BASE_URL}`;

      return config;
    }

    return config;
  },
  (error: Error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  // 에러 처리
  async error => {
    const { config, response } = error;

    // 토큰 자동 재발급 필요 외 다른 에러
    if (
      config.url === `/auth/reissue` ||
      response?.status !== 402 ||
      config.sent
    ) {
      return Promise.reject(error);
    }

    config.sent = true;
    const reissue = await reIssueAccessToken();

    if (reissue.data.accessToken) {
      config.headers.Authorization = `Bearer ${reissue.data.accessToken}`;
    }

    return instance(config);
  },
);
