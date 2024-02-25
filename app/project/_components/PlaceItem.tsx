import React from "react";

interface PlaceItemProps {
  place: Partial<PlaceItem>;
}

function PlaceItem(props: PlaceItemProps) {
  const { place_name, road_address_name } = props.place;

  return (
    <li className="w-full text-left">
      <h1 className="">{place_name}</h1>
      <p className="w-full truncate text-xs text-[#858585]">
        {road_address_name}
      </p>
    </li>
  );
}

export default PlaceItem;
