import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { getGeoAreaCode } from "@/app/_common/api/location";

const useQueryGeoAreaCode = () => {
  const { getPosition, isAllowGPS } = usePositionStore();

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  const { latitude, longitude } = getPosition();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["geoAreaCode"],
    queryFn: () =>
      getGeoAreaCode({
        latitude,
        longitude,
      }),
    enabled: isAllowGPS(),
  });

  return { data, isLoading, isError, error };
};

export default useQueryGeoAreaCode;
