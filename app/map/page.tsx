"use client";

import { MouseEvent } from "react";

import MapComponent from "@/app/_common/components/MapComponent";

import REGION_CODE from "@/app/_common/constants/regionCode";

function Map() {
  const zoomRegion = (regionCode: string) => {
    const map = document.querySelector("#map-wrap") as HTMLDivElement;
    const regionName = Object.keys(REGION_CODE).find(
      region => REGION_CODE[region] === regionCode,
    );
    const region = document.querySelector(`#${regionName}`);

    if (!region || !map) return;

    const { bottom, top, right, left } = region.getBoundingClientRect();
    const { offsetWidth: width, offsetHeight: height } = document.body;
    map.style.transform = `scale(2.5) translate(${width / 2 - (right + left) / 2}px, ${height / 2 - (bottom + top) / 2}px)`;
  };

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
        map.classList.add("touch-none");
        zoomRegion(REGION_CODE[currentRegion.id]);
        currentRegion.classList.add("animate-map-bounce");
        previousRegion = currentRegion;
      }
    }
  };

  return (
    <div
      id="map-wrap"
      onClick={handleRegionClick}
      className="flex h-screen w-screen items-center justify-center p-4 transition-all duration-1000"
    >
      <MapComponent />
    </div>
  );
}

export default Map;
