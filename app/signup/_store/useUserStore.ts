import { persist } from "zustand/middleware";
import { create } from "zustand";

import { User } from "../_type/signup.types";

interface UserState {
  user: User;
  accessToken: string;
}

interface UserAction {
  setUser: (user: User) => void;
  getUser: () => User;
  setAccessToken: (accessToken: string) => void;
}

export const useUserStore = create(
  persist<UserAction & UserState>(
    (set, get) => ({
      accessToken: "",
      user: {
        id: "",
        username: "",
        githubId: "",
        githubUrl: "",
        avatarUrl: "",
      },
      setUser: user => set({ user }),
      getUser: () => get().user,
      setAccessToken: accessToken => set({ accessToken }),
    }),
    {
      name: "user-store",
    },
  ),
);
