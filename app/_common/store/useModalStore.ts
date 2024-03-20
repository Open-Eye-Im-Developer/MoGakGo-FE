import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

interface ModalState {
  isSignup: boolean;
  isAuthLocation: boolean;
  setSignupOpen: (open: boolean) => void;
  setAuthLocationOpen: (open: boolean) => void;
}

export const useModalStore = create(
  persist<ModalState>(
    set => ({
      isSignup: false,
      isAuthLocation: false,
      setSignupOpen: (open: boolean) => set({ isSignup: open }),
      setAuthLocationOpen: (open: boolean) => set({ isAuthLocation: open }),
    }),
    {
      name: "modal-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
