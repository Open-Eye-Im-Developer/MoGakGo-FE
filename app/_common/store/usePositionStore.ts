import { persist } from "zustand/middleware";
import { create } from "zustand";

interface PositionState {
  longitude: string;
  latitude: string;
}

interface PositionAction {
  setPosition: (position: PositionState) => void;
  getPosition: () => PositionState;
}

const usePositionStore = create(
  persist<PositionState & PositionAction>(
    (set, get) => ({
      longitude: "",
      latitude: "",
      setPosition: ({ longitude, latitude }) => set({ longitude, latitude }),
      getPosition: () => {
        const { longitude, latitude } = get();
        return { longitude, latitude };
      },
    }),
    {
      name: "position-store",
    },
  ),
);

export default usePositionStore;
