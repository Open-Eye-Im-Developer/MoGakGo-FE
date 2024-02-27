"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/app/_common/shadcn/utils";
import { Form } from "@/app/_common/shadcn/ui/form";

import { useSearchTokens } from "@/app/_common/hooks/useSearchTokens";

import { SignupFormSchema } from "../_utils/validation";
import { useQuerySignUpUser } from "../_hooks/useQuerySignUpUser";
import { useMutationSignup } from "../_hooks/useMutationSignup";
import SignupSecondStep from "./SignupSecondStep";
import SignupFirstStep from "./SignupFirstStep";
import SignupFinalStep from "./SignupFinalStep";

function SignupForm() {
  const { newAccessToken, newRefreshToken } = useSearchTokens("session");

  const { data: userData } = useQuerySignUpUser();

  const [nextStep, setNextStep] = useState(0);

  const handleNextStep = () => {
    setNextStep(next => (next < 2 ? next + 1 : next));
  };

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: userData ? userData.username : "알 수 없음",
      wantedJobs: [],
    },
    values: {
      username: userData ? userData.username : "알 수 없음",
      wantedJobs: [],
    },
  });

  const signUp = useMutationSignup(newAccessToken, newRefreshToken);

  const onSubmit = (data: z.infer<typeof SignupFormSchema>) => {
    signUp.mutate(data);
  };

  if (!userData) return <div>loading...</div>;

  return (
    <main className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SignupFirstStep
            form={form}
            className={cn(
              `${nextStep === 1 && "animate-signup-fade-out"} ${nextStep !== 0 && "hidden opacity-0"}`,
            )}
            handleNextStep={handleNextStep}
            user={userData}
          />
          <SignupSecondStep
            className={cn(
              `${nextStep === 1 ? "block animate-signup-fade-in opacity-100" : "hidden"} ${nextStep === 2 && "animate-signup-fade-out"})}`,
            )}
            handleNextStep={handleNextStep}
          />
          <SignupFinalStep
            form={form}
            className={cn(
              `${nextStep === 2 ? "animate-signup-fade-in" : "hidden animate-signup-fade-out opacity-0"}`,
            )}
            newAccessToken={newAccessToken}
            newRefreshToken={newRefreshToken}
          />
        </form>
      </Form>
    </main>
  );
}

export default SignupForm;
