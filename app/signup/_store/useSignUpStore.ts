import { persist } from "zustand/middleware";
import { create } from "zustand";

import { SignUpUser } from "../_type/signup.types";

interface AuthState {
  accessToken: string;
  refreshToken: string;
  user: SignUpUser;
}

interface AuthAction {
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setUser: (user: SignUpUser) => void;
}

export const useSignUpStore = create(
  persist<AuthAction & AuthState>(
    set => ({
      accessToken: "",
      refreshToken: "",
      user: {
        id: "",
        username: "",
        githubId: "",
        githubUrl: "",
        avatarUrl: "",
        bio: "",
        jandiRate: 0,
        achievementTitle: "",
        developLanguages: [],
        wantedJobs: [],
      },
      setAccessToken: accessToken => set(() => ({ accessToken })),
      setRefreshToken: refreshToken => set(() => ({ refreshToken })),
      setUser: user => set({ user }),
    }),
    {
      name: "auth-store",
    },
  ),
);
