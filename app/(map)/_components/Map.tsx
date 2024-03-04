"use client";

import { toast } from "sonner";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

import useQueryGeoAreaCode from "@/app/auth-mylocation/_hooks/useQueryGeoAreaCode";
import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { cn } from "@/app/_common/shadcn/utils";
import {
  Carousel,
  CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_common/shadcn/ui/carousel";

import WithSearchTokens from "@/app/_common/components/WithSearchTokens";
import MapComponent from "@/app/_common/components/MapComponent";
import LoadingSpinner from "@/app/_common/components/LoadingSpinner";

import REGION_CODE from "@/app/_common/constants/regionCode";

import { formatRegionName } from "../_utils/formatRegionName";
import useGetRank from "../_api/useGetRank";
import useGetCardList from "../_api/useGetCardList";
import EmptyCardList from "./EmptyCardList";
import CardList from "./CardList";

function Map() {
  const {
    data: areaCode,
    isError: isGeoError,
    error: geoError,
  } = useQueryGeoAreaCode();
  const [regionCode, setRegionCode] = useState(0);
  const previousRegion = useRef<SVGElement | null>(null);
  const [isListShow, setIsListShow] = useState(false);
  const { rank, isRankLoading } = useGetRank();
  const { isAllowGPS } = usePositionStore();
  const {
    cardList,
    fetchProject,
    hasNextProject,
    fetchProfile,
    hasNextProfile,
  } = useGetCardList(regionCode);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", (carouselApi: EmblaCarouselType) => {
      if (carouselApi.canScrollNext()) return;

      if (hasNextProject) fetchProject();
      else if (!hasNextProject && hasNextProfile) fetchProfile();
    });
  }, [carouselApi, hasNextProject, hasNextProfile]);

  if (isGeoError) toast.error(geoError?.message);

  useEffect(() => {
    if (!areaCode) return;

    toast.info("내가 위치한 지역으로 이동합니다.");
    setRegionCode(areaCode);
    const regionName = formatRegionName(areaCode);
    previousRegion.current = document.querySelector(`#${regionName}`);
  }, [areaCode]);

  const zoomOut = () => {
    if (!(previousRegion.current instanceof SVGElement)) return;
    const map = document.querySelector("#map-wrap") as HTMLDivElement;
    map.style.transform = "";
    previousRegion.current.classList.remove("animate-map-bounce");
    previousRegion.current = null;
    setRegionCode(0);
  };

  const handleRegionClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isAllowGPS()) return;

    const map = document.querySelector("#map-wrap") as HTMLDivElement;
    const isZoomIn = map.style.transform.includes("scale");
    const target = event.target as SVGElement | HTMLElement;
    const isRegion = target.tagName === "path";

    if (isZoomIn) {
      if (isRegion) return;
      zoomOut();
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

  const handleEmptyCardClose = () => {
    setIsListShow(false);
    zoomOut();
  };

  return (
    <div className="relative h-screen w-screen touch-none overflow-hidden">
      <LoadingSpinner
        className={cn(
          "absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full place-content-center bg-white/40 backdrop-blur-sm transition-all duration-300",
          isRankLoading ? "visible opacity-100" : "invisible opacity-0",
        )}
      />
      <div
        id="map-wrap"
        onClick={handleRegionClick}
        className="absolute z-0 flex h-screen w-screen touch-none items-center justify-center transition-all duration-1000"
      >
        <MapComponent
          regionCode={regionCode}
          regionRank={Array.isArray(rank) ? rank : undefined}
        />
      </div>
      <Carousel
        className={cn(
          "h-screen w-screen transition-opacity delay-1000 duration-300",
          isListShow ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={handleCancelCard}
        setApi={setCarouselApi}
      >
        <div
          id="carousel-wrap"
          className="flex h-full w-full flex-col items-center justify-center"
        >
          {cardList.projectList.length !== 0 ||
          cardList.profileList.length !== 0 ? (
            <CardList cardList={cardList} />
          ) : (
            <EmptyCardList onClick={handleEmptyCardClose} />
          )}
        </div>
        <CarouselPrevious className="left-10 hidden md:inline-flex" />
        <CarouselNext className="right-10 hidden md:inline-flex" />
      </Carousel>
    </div>
  );
}

export default WithSearchTokens(Map);
