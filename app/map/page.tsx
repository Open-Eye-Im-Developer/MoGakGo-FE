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
    const { pageX, pageY } = event;
    const { offsetWidth: width, offsetHeight: height } = document.body;
    const x = width / 2 - pageX;
    const y = height / 2 - pageY;
    const isZoomIn = event.currentTarget.style.transform.includes("scale");
    const target = event.target as SVGElement | HTMLElement;

    if (isZoomIn) {
      if (target.tagName === "path") return;
      event.currentTarget.classList.remove("touch-none");
      event.currentTarget.style.transform = "";
      if (previousRegion instanceof SVGElement) {
        previousRegion.classList.remove("animate-map-bounce");
        previousRegion = null;
      }
    } else {
      if (target.tagName !== "path") return;
      const currentRegion = target.closest(".region");
      console.log(currentRegion && REGION_CODE[currentRegion.id]);
      event.currentTarget.classList.add("touch-none");
      event.currentTarget.style.transform = `scale(2.5) translate(${x}px, ${y}px)`;
      if (!previousRegion && currentRegion instanceof SVGElement) {
        previousRegion = currentRegion;
        currentRegion.classList.add("animate-map-bounce");
      }
    }
  };

  return (
    <div
      onClick={handleRegionClick}
      className="flex h-screen w-screen items-center justify-center p-4 transition-all duration-1000"
    >
      <MapComponent />
    </div>
  );
}

export default Map;
