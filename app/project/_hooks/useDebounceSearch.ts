import React, { useEffect, useState } from "react";
import axios from "axios";

import { usePositionStore } from "@/app/_common/store/usePositionStore";

import { FormProps, PlaceItemData } from "../_types/type";

function useDebounceSearch(form: FormProps["form"]) {
  const [placeInput, setPlaceInput] = useState<string>("");
  const [placeList, setPlaceList] = useState<PlaceItemData[]>([]);
  const [overlay, setOverlay] = useState<boolean>(false);
  const { getPosition } = usePositionStore();

  const handleChangePlace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOverlay(true);
    setPlaceInput(event.target.value);
  };

  // TODO: 프로젝트 생성 API와 연결하여, 장소 데이터를 전달하는 로직 추가하기.
  const handleClickPlace = async (place: PlaceItemData) => {
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
        const { data } = await axios.get(
          `https://dapi.kakao.com/v2/local/search/keyword.json?query=${placeInput}&x=${longitude}&y=${latitude}&radius=10000`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
            },
          },
        );
        setPlaceList(data.documents);
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
