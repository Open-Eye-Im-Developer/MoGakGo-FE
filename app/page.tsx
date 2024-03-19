import { Suspense } from "react";

import { generateViewport } from "./_common/utils/generateViewport";
import Map from "./(map)/_components/Map";

import type { Viewport } from "next";

export const viewport: Viewport = generateViewport("#7DD1F2");

export default function Home() {
  return (
    <Suspense>
      <Map />
    </Suspense>
  );
}
