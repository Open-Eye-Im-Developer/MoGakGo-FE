import { persist } from "zustand/middleware";
import { create } from "zustand";

import { User } from "../types/user";

interface AuthState {
  user: User;
}

interface AuthAction {
  setUser: (user: User) => void;
}

export const useUserStore = create(
  persist<AuthAction & AuthState>(
    set => ({
      user: {
        id: 0,
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
      setUser: user => set({ user }),
    }),
    {
      name: "user-store",
    },
  ),
);
