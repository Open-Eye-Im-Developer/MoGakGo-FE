import { toast } from "sonner";

import { PositionState } from "@/app/_common/types/position";

type Parameter = (state: PositionState) => void;

const options = {
  maximumAge: 300000,
  timeout: 15000,
};

export const getGeolocation = (callback: Parameter) => {
  if (typeof navigator === "undefined") return;

  navigator.geolocation.getCurrentPosition(
    position => {
      const { longitude, latitude } = position.coords;
      if (!longitude || !latitude) {
        callback({ longitude: 0, latitude: 0, isGPSOn: false });
        errorCallback({
          code: 2,
          message: "",
          PERMISSION_DENIED: 1,
          POSITION_UNAVAILABLE: 2,
          TIMEOUT: 3,
        });
        return;
      }
      callback({ longitude, latitude, isGPSOn: true });
    },
    errorCallback,
    options,
  );
};

const errorCallback = (error: GeolocationPositionError) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      toast.error("GPS 사용 요청이 거부되었습니다.", {
        description: "GPS 사용 요청을 허용해야 서비스 이용이 가능합니다.",
        // TODO: 허용 안내 모달 팝업
        action: {
          label: "허용 방법",
          onClick: () => console.log("허용 안내 모달 팝업"),
        },
        actionButtonStyle: {
          backgroundColor: "#DC143C",
        },
      });
      break;
    case error.POSITION_UNAVAILABLE:
      toast.error("가져온 위치 정보를 사용할 수 없습니다.", {
        description: "잠시 후 다시 이용해주세요.",
      });
      break;
    case error.TIMEOUT:
      toast.error("위치 정보를 가져오기 위한 요청이 허용 시간을 초과했습니다", {
        description: "잠시 후 다시 이용해주세요.",
      });
      break;
    default:
      toast.error("알 수 없는 오류가 발생했습니다.", {
        description: "잠시 후 다시 이용해주세요",
      });
      break;
  }
};
