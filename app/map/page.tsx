"use client";

import { MouseEvent, useRef, useState } from "react";

import REGION_CODE from "@/app/_common/constants/regionCode";

import ProjectCardContainer from "../project/_components/ProjectCardContainer";
import { cn } from "../_common/shadcn/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_common/shadcn/ui/carousel";
import MapComponent from "../_common/components/MapComponent";
import useGetRank from "./_api/useGetRank";

function Map() {
  const [regionCode, setRegionCode] = useState("");
  const previousRegion = useRef<SVGElement | null>(null);
  const [isListShow, setIsListShow] = useState(false);
  const { data: rank } = useGetRank();

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
        setIsListShow(true);
        setRegionCode(REGION_CODE[currentRegion.id]);
        previousRegion.current = currentRegion;
      }
    }
  };

  const handleCancelCard = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    if (event.target.id === "carousel-wrap") setIsListShow(false);
  };

  return (
    <div className="relative h-screen w-screen">
      <div
        id="map-wrap"
        onClick={handleRegionClick}
        className="absolute z-0 flex h-screen w-screen items-center justify-center transition-all duration-1000"
      >
        <MapComponent regionCode={regionCode} regionRank={rank} />
      </div>
      <Carousel
        className={cn(
          "h-screen w-screen transition-opacity duration-300",
          isListShow ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={handleCancelCard}
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
