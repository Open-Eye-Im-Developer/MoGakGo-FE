"use client";

import { MouseEvent, useRef, useState } from "react";

import MapComponent from "@/app/_common/components/MapComponent";

import REGION_CODE from "@/app/_common/constants/regionCode";

function Map() {
  const [regionCode, setRegionCode] = useState("");
  const previousRegion = useRef<SVGElement | null>(null);

  const handleRegionClick = (event: MouseEvent<HTMLDivElement>) => {
    const map = document.querySelector("#map-wrap") as HTMLDivElement;
    const isZoomIn = map.style.transform.includes("scale");
    const target = event.target as SVGElement | HTMLElement;
    const isRegion = target.tagName === "path";

    if (isZoomIn) {
      if (isRegion || !(previousRegion.current instanceof SVGElement)) return;

      map.classList.remove("touch-none");
      map.style.transform = "";
      previousRegion.current.classList.remove("animate-map-bounce");
      previousRegion.current = null;
    } else {
      if (!isRegion) return;

      const currentRegion = target.closest(".region");
      if (currentRegion instanceof SVGElement) {
        setRegionCode(REGION_CODE[currentRegion.id]);
        previousRegion.current = currentRegion;
      }
    }
  };

  return (
    <div
      id="map-wrap"
      onClick={handleRegionClick}
      className="flex h-screen w-screen items-center justify-center p-4 transition-all duration-1000"
    >
      <MapComponent regionCode={regionCode} />
    </div>
  );
}

export default Map;
