import React, { useEffect, useState } from "react";

import { usePositionStore } from "@/app/_common/store/usePositionStore";

function useDebounceSearch(form: IFormProps["form"]) {
  const [placeInput, setPlaceInput] = useState<string>("");
  const [placeList, setPlaceList] = useState<PlaceItem[]>([]);
  const [overlay, setOverlay] = useState<boolean>(false);
  const { getPosition } = usePositionStore();

  const handleChangePlace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOverlay(true);
    setPlaceInput(event.target.value);
  };

  // TODO: 프로젝트 생성 API와 연결하여, 장소 데이터를 전달하는 로직 추가하기.
  const handleClickPlace = async (place: PlaceItem) => {
    setOverlay(false);
    setPlaceInput(place.place_name);
    form.setValue("place", place.place_name);
    form.setValue("latitude", Number(place.y));
    form.setValue("longitude", Number(place.x));
  };

  useEffect(() => {
    const { latitude, longitude } = getPosition();

    if (overlay) {
      const timer = setTimeout(async () => {
        const response = await fetch(
          `/api/place/search?keyword=${placeInput}&lat=${latitude}&lng=${longitude}`,
        );
        const data = await response.json();
        setPlaceList(data.data);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [placeInput, overlay, getPosition]);

  return {
    placeInput,
    handleChangePlace,
    handleClickPlace,
    placeList,
    overlay,
  };
}

export default useDebounceSearch;
