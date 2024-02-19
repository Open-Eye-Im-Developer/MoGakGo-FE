import { persist } from "zustand/middleware";
import { create } from "zustand";

interface PositionState {
  longitude: number;
  latitude: number;
}

interface PositionAction {
  setPosition: (position: PositionState) => void;
  getPosition: () => PositionState;
}

const usePositionStore = create(
  persist<PositionState & PositionAction>(
    (set, get) => ({
      setPosition: ({ longitude, latitude }) => set({ longitude, latitude }),
      longitude: 0,
      latitude: 0,
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
