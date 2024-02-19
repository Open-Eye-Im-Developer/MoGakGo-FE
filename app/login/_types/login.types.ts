export interface GithubUrlResponse {
  loginUrl: string;
}

export interface reIssueAccessTokenRequest {
  refreshToken: string;
}

export interface reIssueAccessTokenResponse {
  accessToken: string;
  signUpComplete: boolean;
}
