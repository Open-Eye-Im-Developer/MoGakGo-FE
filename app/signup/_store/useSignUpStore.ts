import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

import { SignUpUser } from "../_type/signup.types";
import { setAccessToken } from "./setAccessToken";

interface AuthState {
  accessToken: string;
  authenticated: boolean;
  user: SignUpUser;
}

interface AuthAction {
  setAccessToken: (accessToken: string) => void;
  getAccessToken: () => string;
  setUser: (user: SignUpUser) => void;
  getUser: () => SignUpUser;
  setAuthentication: (val: boolean) => void;
}

export const useSignUpStore = create(
  persist<AuthAction & AuthState>(
    (set, get) => ({
      accessToken: "",
      authenticated: false,
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
      setAccessToken: accessToken => {
        setAccessToken(accessToken);

        return set(() => ({ accessToken }));
      },
      getAccessToken: () => get().accessToken,
      setUser: user => set({ user }),
      getUser: () => get().user,
      setAuthentication: authenticated => set({ authenticated }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
