"use client";

import MapComponent from "@/app/_common/components/MapComponent";
import { MouseEvent } from "react";

function Map() {
  const handleRegionClick = (event: MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = event;
    const { offsetWidth: width, offsetHeight: height } = document.body;
    const x = width / 2 - pageX;
    const y = height / 2 - pageY;
    const isZoomIn = event.currentTarget.style.transform.includes("scale");
    if (isZoomIn) {
      event.currentTarget.classList.remove("touch-none");
      event.currentTarget.style.transform = "";
    } else {
      event.currentTarget.classList.add("touch-none");
      event.currentTarget.style.transform = `scale(2.5) translate(${x}px, ${y}px)`;
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
