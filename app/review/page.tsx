import { Suspense } from "react";

import LoadingSpinner from "../_common/components/LoadingSpinner";
import ReviewForm from "./_components/ReviewForm";

function ReviewPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main className="grid h-screen place-items-center bg-gradient-to-b from-green-300 to-cyan-300 p-4">
        <ReviewForm />
      </main>
    </Suspense>
  );
}

export default ReviewPage;
