import React from "react";

import { Button } from "@/app/_common/shadcn/ui/button";

import PlaceItem from "./PlaceItem";

interface PlaceListProps {
  placeList: PlaceItem[];
  isOverlayered: boolean;
  onClickPlace: (place: PlaceItem) => void;
}

function PlaceList(props: PlaceListProps) {
  const { placeList, isOverlayered, onClickPlace } = props;

  return isOverlayered ? (
    <div className="relative w-full">
      {placeList && (
        <div className="h-fit rounded-lg border p-3">
          {placeList.length > 0 ? (
            <ul className="absolute left-0 top-0 z-[50] flex h-60 w-full flex-col gap-3 overflow-scroll rounded-lg border bg-white p-3">
              {placeList.map(place => (
                <Button
                  key={place.id}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => onClickPlace(place)}
                >
                  <PlaceItem place={place} />
                </Button>
              ))}
            </ul>
          ) : (
            <p className="w-full text-sm text-[#858585]">
              검색 결과가 없습니다.
            </p>
          )}
        </div>
      )}
    </div>
  ) : null;
}

export default PlaceList;
