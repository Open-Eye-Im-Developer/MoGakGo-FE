import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

interface ModalState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useModalStore = create(
  persist<ModalState>(
    set => ({
      open: false,
      setOpen: (open: boolean) => set({ open }),
    }),
    {
      name: "modal-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
