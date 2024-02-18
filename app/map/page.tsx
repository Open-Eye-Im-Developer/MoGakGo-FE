"use client";

import { MouseEvent } from "react";

import MapComponent from "@/app/_common/components/MapComponent";

import REGION_CODE from "@/app/_common/constants/regionCode";

function Map() {
  const [regionCode, setRegionCode] = useState("");

  let previousRegion: SVGElement | null = null;
  const handleRegionClick = (event: MouseEvent<HTMLDivElement>) => {
    const map = document.querySelector("#map-wrap") as HTMLDivElement;
    const isZoomIn = map.style.transform.includes("scale");
    const target = event.target as SVGElement | HTMLElement;
    const isRegion = target.tagName === "path";

    if (isZoomIn) {
      if (isRegion) return;

      map.classList.remove("touch-none");
      map.style.transform = "";
      if (previousRegion instanceof SVGElement) {
        previousRegion.classList.remove("animate-map-bounce");
        previousRegion = null;
      }
    } else {
      if (!isRegion) return;

      const currentRegion = target.closest(".region");
      if (currentRegion instanceof SVGElement) {
        previousRegion = currentRegion;
        setRegionCode(REGION_CODE[currentRegion.id]);
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
