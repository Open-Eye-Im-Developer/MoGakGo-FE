"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

import useQueryGeoAreaCode from "@/app/auth-mylocation/_hooks/useQueryGeoAreaCode";
import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { cn } from "@/app/_common/shadcn/utils";
import { Carousel, CarouselApi } from "@/app/_common/shadcn/ui/carousel";
import WithNavigation from "@/app/_common/hoc/WithNavigation";

import MapComponent from "@/app/_common/components/MapComponent";
import LoadingSpinner from "@/app/_common/components/LoadingSpinner";
import Icon from "@/app/_common/components/Icon";

import REGION_CODE from "@/app/_common/constants/regionCode";

import { toast } from "@/app/_common/utils/toast";

import { formatRegionName } from "../_utils/formatRegionName";
import useGetRank from "../_api/useGetRank";
import useGetCardList from "../_api/useGetCardList";
import EmptyCardList from "./EmptyCardList";
import CardList from "./CardList";

function Map() {
  const { data: areaCode } = useQueryGeoAreaCode();
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

  useEffect(() => {
    if (!areaCode) return;
    toast.info("내가 위치한 지역으로 이동합니다.");
    setRegionCode(areaCode);
    const regionName = formatRegionName(areaCode);
    previousRegion.current = document.querySelector(`#${regionName}`);
    setIsListShow(true);
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
    if (!isAllowGPS()) {
      toast.info("서비스를 이용하려면 GPS 수집을 허용해주세요!");
      return;
    }

    const target = event.target as SVGElement | HTMLElement;
    const isRegion = target.tagName === "path";
    const map = document.querySelector("#map-wrap") as HTMLDivElement;
    const isZoomIn = map.style.transform.includes("scale");
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

  const handleCardClose = () => {
    setIsListShow(false);
    zoomOut();
  };

  return (
    <div className="relative h-full w-screen touch-none overflow-hidden">
      <Icon
        id="vertical-logo"
        height={200}
        className="logo-vertical cursor-pointer"
      />
      <div className="map-background" />
      <div className="map-background" />
      <LoadingSpinner
        className={cn(
          "absolute bottom-0 left-0 right-0 top-0 z-100 flex h-full w-full place-content-center bg-black/40 backdrop-blur-sm transition-all duration-300",
          isRankLoading ? "visible opacity-100" : "invisible opacity-0",
        )}
      />
      <div
        id="map-wrap"
        onClick={handleRegionClick}
        className="absolute z-0 flex h-full w-screen touch-none items-center justify-center transition-all duration-1000"
      >
        <MapComponent
          regionCode={regionCode}
          regionRank={Array.isArray(rank) ? rank : undefined}
        />
      </div>
      <Carousel
        className={cn(
          "z-60 h-full w-screen transition-all delay-0 duration-300",
          isListShow ? "visible opacity-100 delay-1000" : "invisible opacity-0",
        )}
        setApi={setCarouselApi}
      >
        <div
          id="carousel-wrap"
          className="flex h-full w-full flex-col items-center justify-center"
        >
          {cardList.projectList.length !== 0 ||
          cardList.profileList.length !== 0 ? (
            <CardList cardList={cardList} onClick={handleCardClose} />
          ) : (
            <EmptyCardList onClick={handleCardClose} />
          )}
        </div>
      </Carousel>
    </div>
  );
}

export default WithNavigation(Map, true);
