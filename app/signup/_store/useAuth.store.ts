import { persist } from "zustand/middleware";
import { create } from "zustand";

import { getCookie } from "@/app/_common/utils/cookie";

import { User } from "../_type/signup.types";
import { setAccessToken } from "./setAccessToken";

interface AuthState {
  accessToken: string;
  authenticated: boolean;
  user: User;
}

interface AuthAction {
  setAccessToken: (accessToken: string) => void;
  setAuthentication: (val: boolean) => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create(
  persist<AuthAction & AuthState>(
    (set, get) => ({
      accessToken: "",
      authenticated: false,
      user: {
        id: "",
        username: "",
        github_id: "",
        github_url: "",
        avatar_url: "",
        created_at: "",
        deleted_at: "",
      },
      getAccessToken: () => {
        return get().accessToken ?? getCookie("accessToken");
      },
      setAccessToken: accessToken => {
        setAccessToken(accessToken);

        return set(() => ({ accessToken }));
      },
      setAuthentication: authenticated => set({ authenticated }),
      setUser: user => set({ user }),
      getUser: () => get().user,
    }),
    {
      name: "auth-store", // name of the item in the storage (must be unique)
    },
  ),
);
