import { Url } from "url";

export interface GithubUrlResponse {
  loginUrl: Url;
}

export interface reIssueAccessTokenRequest {
  refreshToken: string;
}

export interface reIssueAccessTokenResponse {
  accessToken: string;
  signUpComplete: boolean;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  signUpComplete: boolean;
}
