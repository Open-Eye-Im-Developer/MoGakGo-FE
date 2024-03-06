import { Suspense } from "react";

import LoadingSpinner from "../_common/components/LoadingSpinner";
import ReviewForm from "./_components/ReviewForm";

function ReviewPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main className="p-4">
        <ReviewForm />
      </main>
    </Suspense>
  );
}

export default ReviewPage;
