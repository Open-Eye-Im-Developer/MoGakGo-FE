import { Suspense } from "react";

import { generateViewport } from "./_common/utils/generateViewport";
import { theme } from "./_common/constants/viewPortTheme";
import Map from "./(map)/_components/Map";

import type { Viewport } from "next";

export const viewport: Viewport = generateViewport({
  lightColor: theme.SKY.light,
  darkColor: theme.SKY.dark,
});

export default function Home() {
  return (
    <Suspense>
      <Map />
    </Suspense>
  );
}
