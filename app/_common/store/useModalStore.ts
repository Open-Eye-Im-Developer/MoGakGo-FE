import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

interface ModalState {
  signup: boolean;
  authLocation: boolean;
  setSignupOpen: (open: boolean) => void;
  setAuthLocationOpen: (open: boolean) => void;
}

export const useModalStore = create(
  persist<ModalState>(
    set => ({
      signup: false,
      authLocation: false,
      setSignupOpen: (open: boolean) => set({ signup: open }),
      setAuthLocationOpen: (open: boolean) => set({ authLocation: open }),
    }),
    {
      name: "modal-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
