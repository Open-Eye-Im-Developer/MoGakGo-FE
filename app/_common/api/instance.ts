import axios from "axios";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

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
    // TODO: 회원가입/로그인 merge 후 주석 해제
    // const accessToken =
    //   localStorage.getItem("accessToken") ??
    //   sessionStorage.getItem("accessToken");

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  error => {
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
