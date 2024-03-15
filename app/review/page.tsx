import { Suspense } from "react";

import LoadingSpinner from "../_common/components/LoadingSpinner";
import ReviewForm from "./_components/ReviewForm";

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
