import { persist } from "zustand/middleware";
import { create } from "zustand";

interface PositionState {
  longitude: number;
  latitude: number;
}

interface PositionAction {
  setPosition: () => void;
  getPosition: () => PositionState;
}

const usePositionStore = create(
  persist<PositionState & PositionAction>(
    (set, get) => ({
      longitude: 0,
      latitude: 0,
      setPosition: () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { longitude, latitude } = position.coords;
          set({ longitude, latitude });
        });
      },
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
