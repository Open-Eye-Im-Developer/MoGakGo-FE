import { PositionState } from "@/app/_common/types/position";

type Parameter = (state: PositionState) => void;

const getGeolocation = (callback: Parameter) => navigator.geolocation.getCurrentPosition((position) => {
const errorCallback = (error: GeolocationPositionError) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      // TODO: 재허용이나 GPS 허용 안내 모달 or 문구 or 리다이랙션 추가
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

const options = {
  maximumAge: 300000,
  timeout: 15000
};

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
}, errorCallback, options);

export default getGeolocation;