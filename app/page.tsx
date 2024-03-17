import { Suspense } from "react";

import Map from "./(map)/_components/Map";

export default function Home() {
  return (
    <Suspense>
      <Map />
    </Suspense>
  );
}
