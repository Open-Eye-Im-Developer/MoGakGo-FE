import { persist } from "zustand/middleware";
import { create } from "zustand";

import { User } from "../types/user";

interface AuthState {
  user: User | null;
}

interface AuthAction {
  setUser: (user: User | null) => void;
  getUser: () => User | null;
}

export const useAuthStore = create(
  persist<AuthAction & AuthState>(
    (set, get) => ({
      user: null,
      setUser: user => set({ user }),
      getUser: () => get().user,
    }),
    {
      name: "auth-store",
    },
  ),
);
