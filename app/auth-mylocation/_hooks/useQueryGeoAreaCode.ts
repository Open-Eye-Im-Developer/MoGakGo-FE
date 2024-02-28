import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { getGeoAreaCode } from "@/app/_common/api/location";

import { GeoAreaCode } from "@/app/_common/types/position";

import { checkInstanceOfResponseError } from "@/app/_common/utils/checkInstanceOfResponseError";

const useQueryGeoAreaCode = () => {
  const { getPosition, isAllowGPS, setPosition } = usePositionStore();

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  const { latitude, longitude } = getPosition();

  if (!isAllowGPS() || (!latitude && !longitude)) setPosition();

  const { data, isLoading, isError, error } = useQuery<GeoAreaCode>({
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
  return { data, isLoading, isError, error };
};

export default useQueryGeoAreaCode;
