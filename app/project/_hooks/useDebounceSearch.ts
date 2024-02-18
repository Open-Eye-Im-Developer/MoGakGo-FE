import React, { useEffect, useState } from "react";

function useDebounceSearch() {
  const [placeInput, setPlaceInput] = useState<string>("");
  const [placeList, setPlaceList] = useState<PlaceItem[]>([]);
  const [overlay, setOverlay] = useState<boolean>(false);

  const handleChangePlace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOverlay(true);
    setPlaceInput(event.target.value);
  };

  // TODO: 프로젝트 생성 API와 연결하여, 장소 데이터를 전달하는 로직 추가하기.
  const handleClickPlace = async (place: PlaceItem) => {
    setOverlay(false);
    setPlaceInput(place.place_name);
  };

  useEffect(() => {
    if (overlay) {
      const timer = setTimeout(async () => {
        const response = await fetch(`/api/searchPlace?keyword=${placeInput}`);
        const data = await response.json();
        setPlaceList(data.data);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [placeInput, overlay]);

  return {
    placeInput,
    handleChangePlace,
    handleClickPlace,
    placeList,
    overlay,
  };
}

export default useDebounceSearch;
