import { persist } from "zustand/middleware";
import { create } from "zustand";

import getGeolocation from "@/app/_common/utils/getGeolocation";

interface Coordinate {
  longitude: number;
  latitude: number;
}

interface PositionState extends Coordinate {
  isGPSOn: boolean;
}

interface PositionAction {
  setPosition: () => void;
  getPosition: () => Coordinate;
}

const usePositionStore = create(
  persist<PositionState & PositionAction>(
    (set, get) => ({
      isGPSOn: false,
      longitude: 0,
      latitude: 0,
      setPosition: () => {
        getGeolocation(set);
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
