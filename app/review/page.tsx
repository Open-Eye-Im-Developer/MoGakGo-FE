import { Suspense } from "react";

import { generateViewport } from "../_common/utils/generateViewport";
import { theme } from "../_common/constants/viewPortTheme";
import LoadingSpinner from "../_common/components/LoadingSpinner";
import ReviewForm from "./_components/ReviewForm";

import type { Viewport } from "next";

export const viewport: Viewport = generateViewport(theme.SKY);

function ReviewPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main className="map-background grid h-screen w-full place-items-center p-4">
        <ReviewForm />
      </main>
    </Suspense>
  );
}

export default ReviewPage;
