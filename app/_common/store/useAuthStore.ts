import { persist } from "zustand/middleware";
import { create } from "zustand";

import { SignUpUser } from "@/app/signup/_type/signup";

interface AuthState {
  user: SignUpUser | null;
}

interface AuthAction {
  setUser: (user: AuthState["user"]) => void;
  getUser: () => AuthState["user"];
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
