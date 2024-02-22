import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

import { Coordinate, PositionState } from "@/app/_common/types/position.types";

import { getGeolocation } from "@/app/_common/utils/getGeolocation";

interface PositionAction {
  setPosition: () => void;
  validatePosition: () => boolean;
  getPosition: () => Coordinate;
}

export const usePositionStore = create(
  persist<PositionState & PositionAction>(
    (set, get) => ({
      isGPSOn: false,
      longitude: 0,
      latitude: 0,
      setPosition: () => {
        getGeolocation(set);
      },
      validatePosition: () => {
        return get().isGPSOn;
      },
      getPosition: () => {
        const { longitude, latitude } = get();
        return { longitude, latitude };
      },
    }),
    {
      name: "position-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
