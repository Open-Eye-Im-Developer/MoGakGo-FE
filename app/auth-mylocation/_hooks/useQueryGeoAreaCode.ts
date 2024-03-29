import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { getGeoAreaCode } from "@/app/_common/api/location";

import { checkInstanceOfResponseError } from "@/app/_common/utils/checkInstanceOfResponseError";

const useQueryGeoAreaCode = () => {
  const { getPosition, isAllowGPS, setPosition } = usePositionStore();
  const { latitude, longitude } = getPosition();
  const [isTrigger, setIsTrigger] = useState(true);

  if (!isAllowGPS() || (!latitude && !longitude)) {
    if (isTrigger) {
      setPosition();
      setIsTrigger(false);
    }
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["geoAreaCode"],
    queryFn: () =>
      getGeoAreaCode({
        latitude,
        longitude,
      }),
    enabled: isAllowGPS(),
  });

  if (isLoading || !data) {
    return { data, isLoading, isError, error };
  }
  if (checkInstanceOfResponseError(data)) {
    return { data: undefined, isLoading, isError: true, error: data };
  }
  return { data: data.areaCode, isLoading, isError, error };
};

export default useQueryGeoAreaCode;
