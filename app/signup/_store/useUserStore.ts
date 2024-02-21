import { persist } from "zustand/middleware";
import { create } from "zustand";

import { User } from "../_type/signup.types";

interface UserState {
  user: User;
}

interface UserAction {
  setUser: (user: User) => void;
  getUser: () => User;
}

export const useUserStore = create(
  persist<UserAction & UserState>(
    (set, get) => ({
      user: {
        id: "",
        username: "",
        githubId: "",
        githubUrl: "",
        avatarUrl: "",
      },
      setUser: user => set({ user }),
      getUser: () => get().user,
    }),
    {
      name: "user-store",
    },
  ),
);
