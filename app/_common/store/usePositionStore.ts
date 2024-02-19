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
        }, errorCallback);
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

const errorCallback = (error: GeolocationPositionError) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.error("사용자가 Geolocation API의 사용 요청을 거부했습니다");
      break;
    case error.POSITION_UNAVAILABLE:
      console.error("가져온 위치 정보를 사용할 수 없습니다.");
      break;
    case error.TIMEOUT:
      console.error("위치 정보를 가져오기 위한 요청이 허용 시간을 초과했습니다");
      break;
    default:
      console.error("알 수 없는 오류가 발생했습니다.");
      break;
  }
};

export default usePositionStore;
