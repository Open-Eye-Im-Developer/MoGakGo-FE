"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { cn } from "@/app/_common/shadcn/utils";
import { Button } from "@/app/_common/shadcn/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef}>
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-12 w-12 rounded-full p-0 active:translate-x-[3px] active:translate-y-[calc(-50%+3px)] active:shadow-none",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        !canScrollPrev &&
          "translate-x-[3px] translate-y-[calc(-50%+3px)] bg-[#F1F5F9] shadow-none",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {/* // TODO: svg sprite 작업 아후 아이콘 변경 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={24}
        width={24}
        id="Cursor-Hand--Streamline-Pixel"
        className="rotate-[-90deg] -scale-x-100"
      >
        <desc>{"Cursor Hand Streamline Icon: https://streamlinehq.com"}</desc>
        <title>{"cursor-hand"}</title>
        <g>
          <path
            d="M20.0025 10.2825h1.1400000000000001v8.0025h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M18.855 20.572499999999998H7.4325v-1.1400000000000001H6.285v1.1400000000000001H5.1450000000000005V24h15.997499999999999v-3.4275h-1.1400000000000001v-2.2874999999999996h-1.1475Zm0 2.2874999999999996H16.575000000000003v-1.1475h2.2800000000000002Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M18.855 9.1425h1.1475v1.1400000000000001h-1.1475Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M16.575000000000003 10.2825h1.1400000000000001v3.435H16.575000000000003Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M16.575000000000003 8.0025h2.2800000000000002v1.1400000000000001H16.575000000000003Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M13.1475 10.2825h1.1400000000000001v3.435h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M9.712499999999999 10.2825h1.1475v3.435h-1.1475Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="m9.712499999999999 8.0025 6.862500000000001 0 0 -1.1475 -5.715 0 0 -5.715 -1.1475 0 0 6.862500000000001z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M7.4325 0h2.2800000000000002v1.1400000000000001H7.4325Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="m6.285 14.857499999999998 1.1475 0 0 -13.7175 -1.1475 0 0 8.0025 -1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 4.574999999999999z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M5.1450000000000005 18.285h1.1400000000000001v1.1475H5.1450000000000005Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M4.005 15.997499999999999h1.1400000000000001v2.2874999999999996H4.005Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M4.005 10.2825h1.1400000000000001v1.1475H4.005Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M2.8575 11.43h1.1475v4.5675H2.8575Z"
            fill="#000000"
            strokeWidth={1}
          />
        </g>
      </svg>
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-12 w-12 rounded-full p-0 active:translate-x-[3px] active:translate-y-[calc(-50%+3px)] active:shadow-none",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        !canScrollNext &&
          "translate-x-[3px] translate-y-[calc(-50%+3px)] bg-[#F1F5F9] shadow-none",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {/* // TODO: svg sprite 작업 아후 아이콘 변경 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={24}
        width={24}
        id="Cursor-Hand--Streamline-Pixel"
        className="rotate-90"
      >
        <desc>{"Cursor Hand Streamline Icon: https://streamlinehq.com"}</desc>
        <title>{"cursor-hand"}</title>
        <g>
          <path
            d="M20.0025 10.2825h1.1400000000000001v8.0025h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M18.855 20.572499999999998H7.4325v-1.1400000000000001H6.285v1.1400000000000001H5.1450000000000005V24h15.997499999999999v-3.4275h-1.1400000000000001v-2.2874999999999996h-1.1475Zm0 2.2874999999999996H16.575000000000003v-1.1475h2.2800000000000002Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M18.855 9.1425h1.1475v1.1400000000000001h-1.1475Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M16.575000000000003 10.2825h1.1400000000000001v3.435H16.575000000000003Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M16.575000000000003 8.0025h2.2800000000000002v1.1400000000000001H16.575000000000003Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M13.1475 10.2825h1.1400000000000001v3.435h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M9.712499999999999 10.2825h1.1475v3.435h-1.1475Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="m9.712499999999999 8.0025 6.862500000000001 0 0 -1.1475 -5.715 0 0 -5.715 -1.1475 0 0 6.862500000000001z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M7.4325 0h2.2800000000000002v1.1400000000000001H7.4325Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="m6.285 14.857499999999998 1.1475 0 0 -13.7175 -1.1475 0 0 8.0025 -1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 4.574999999999999z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M5.1450000000000005 18.285h1.1400000000000001v1.1475H5.1450000000000005Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M4.005 15.997499999999999h1.1400000000000001v2.2874999999999996H4.005Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M4.005 10.2825h1.1400000000000001v1.1475H4.005Z"
            fill="#000000"
            strokeWidth={1}
          />
          <path
            d="M2.8575 11.43h1.1475v4.5675H2.8575Z"
            fill="#000000"
            strokeWidth={1}
          />
        </g>
      </svg>
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
