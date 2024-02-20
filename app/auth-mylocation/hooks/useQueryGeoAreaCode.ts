import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { getGeoAreaCode } from "@/app/_common/api/location";

const useQueryGeoAreaCode = () => {
  const { getPosition, setPosition, validatePosition, isGPSOn } =
    usePositionStore();

  console.log(getPosition());

  useEffect(() => {
    setPosition();
  }, [setPosition]);

  const { latitude, longitude } = getPosition();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["geoAreaCode"],
    queryFn: () => getGeoAreaCode({ latitude, longitude }),
    enabled: isGPSOn,
    retry: validatePosition(),
  });

  return { data, isLoading, isError };
};

export default useQueryGeoAreaCode;
