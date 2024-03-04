import { Suspense } from "react";

import SignupForm from "./_components/SignupForm";

function SignUpPage() {
  return (
    <Suspense>
      <SignupForm />;
    </Suspense>
  );
}

export default SignUpPage;
