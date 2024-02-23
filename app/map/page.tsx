"use client";

import { MouseEvent, useRef, useState } from "react";

import REGION_CODE from "@/app/_common/constants/regionCode";

import ProjectCardContainer from "../project/_components/ProjectCardContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_common/shadcn/ui/carousel";
import MapComponent from "../_common/components/MapComponent";

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
    <div className="relative h-screen w-screen">
      <div
        id="map-wrap"
        onClick={handleRegionClick}
        className="absolute z-0 flex h-screen w-screen items-center justify-center transition-all duration-1000"
      >
        <MapComponent regionCode={regionCode} />
      </div>
      <Carousel
      >
        <div
          id="carousel-wrap"
          className="flex h-full w-full flex-col items-center justify-center overflow-hidden"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="mb-20 flex items-center justify-center">
                  <ProjectCardContainer />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className="left-10 hidden md:inline-flex" />
        <CarouselNext className="right-10 hidden md:inline-flex" />
      </Carousel>
    </div>
  );
}

export default Map;
