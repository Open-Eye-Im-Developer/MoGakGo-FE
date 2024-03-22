import { Suspense } from "react";

import { generateViewport } from "../_common/utils/generateViewport";
import { theme } from "../_common/constants/viewPortTheme";
import ReviewSkeleton from "./_components/ReviewSkeleton";
import ReviewForm from "./_components/ReviewForm";

import type { Viewport } from "next";

export const viewport: Viewport = generateViewport({
  lightColor: theme.SKY.light,
  darkColor: theme.SKY.dark,
});

function ReviewPage() {
  return (
    <Suspense fallback={<ReviewSkeleton />}>
      <main className="map-background grid h-screen w-full place-items-center p-4">
        <ReviewForm />
      </main>
    </Suspense>
  );
}

export default ReviewPage;
