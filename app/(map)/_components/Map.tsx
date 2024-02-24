"use client";

import { toast } from "sonner";
import { MouseEvent, useEffect, useRef, useState } from "react";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { cn } from "@/app/_common/shadcn/utils";

import useQueryGeoAreaCode from "@/app/auth-mylocation/hooks/useQueryGeoAreaCode";

import REGION_CODE from "@/app/_common/constants/regionCode";

import useGetRank from "../_api/useGetRank";
import ProjectCardContainer from "../../project/_components/ProjectCardContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../_common/shadcn/ui/carousel";
import MapComponent from "../../_common/components/MapComponent";

function Map() {
  const { data, isError: isGeoError, error: geoError } = useQueryGeoAreaCode();
  const [regionCode, setRegionCode] = useState(0);
  const previousRegion = useRef<SVGElement | null>(null);
  const [isListShow, setIsListShow] = useState(false);
  const {
    data: rank,
    isError: isRankError,
    error: rankError,
  } = useGetRank();
  const { isAllowGPS } = usePositionStore();

  if (isGeoError) toast.error(geoError?.message);
  if (isRankError) toast.error(rankError.message);

  useEffect(() => {
    if (data) {
      toast.info("내가 위치한 지역으로 이동합니다.");
      setRegionCode(data.areaCode);
      const regionName = Object.keys(REGION_CODE).find(
        region => REGION_CODE[region] === data.areaCode,
      );
      previousRegion.current = document.querySelector(`#${regionName}`);
    }
  }, [data]);

  const handleRegionClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isAllowGPS()) return;

    const map = document.querySelector("#map-wrap") as HTMLDivElement;
    const isZoomIn = map.style.transform.includes("scale");
    const target = event.target as SVGElement | HTMLElement;
    const isRegion = target.tagName === "path";

    if (isZoomIn) {
      if (isRegion || !(previousRegion.current instanceof SVGElement)) return;

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
        getProjectList(currentRegion.id);
      }
    }
  };

  const handleCancelCard = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    if (event.target.id === "carousel-wrap") setIsListShow(false);
  };

  const getProjectList = async (regionName: string) => {
    const region = regionName.toUpperCase();
    const response = await fetch(`api/project/list/${region}`);
    const json = await response.json();
    console.log(json);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden touch-none">
      <div
        id="map-wrap"
        onClick={handleRegionClick}
        className="absolute z-0 flex h-screen w-screen items-center justify-center transition-all duration-1000 touch-none"
      >
        <MapComponent
          regionCode={regionCode}
          regionRank={Array.isArray(rank) ? rank : undefined}
        />
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
          className="flex h-full w-full flex-col items-center justify-center"
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
