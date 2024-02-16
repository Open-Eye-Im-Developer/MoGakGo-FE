"use client";

import { MouseEvent } from "react";

import MapComponent from "@/app/_common/components/MapComponent";

function Map() {
  let previousRegion: SVGElement | null = null;
  const handleRegionClick = (event: MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = event;
    const { offsetWidth: width, offsetHeight: height } = document.body;
    const x = width / 2 - pageX;
    const y = height / 2 - pageY;
    const isZoomIn = event.currentTarget.style.transform.includes("scale");
    const { tagName, parentElement } = event.target as SVGElement | HTMLElement;
    if (isZoomIn) {
      if (tagName === "path") return;
      event.currentTarget.classList.remove("touch-none");
      event.currentTarget.style.transform = "";
      if (previousRegion instanceof SVGElement) {
        previousRegion.classList.remove("animate-map-bounce");
        previousRegion = null;
      }
    } else {
      if (tagName !== "path") return;
      event.currentTarget.classList.add("touch-none");
      event.currentTarget.style.transform = `scale(2.5) translate(${x}px, ${y}px)`;
      if (!previousRegion && parentElement instanceof SVGElement) {
        previousRegion = parentElement;
        parentElement.classList.add("animate-map-bounce");
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
