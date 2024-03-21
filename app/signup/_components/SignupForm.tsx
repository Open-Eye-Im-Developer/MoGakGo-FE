"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useModalStore } from "@/app/_common/store/useModalStore";
import { cn } from "@/app/_common/shadcn/utils";
import { Form } from "@/app/_common/shadcn/ui/form";

import LoadingSpinner from "@/app/_common/components/LoadingSpinner";
import CustomModal from "@/app/_common/components/CustomModal";

import { useQueryDevelopLanguages } from "@/app/_common/hooks/queries/useQueryDevelopLanguages";

import { SignupFormSchema } from "../_utils/validation";
import { useQuerySignUpUser } from "../_hooks/useQuerySignUpUser";
import { useMutationSignup } from "../_hooks/useMutationSignup";
import SignupSecondStep from "./SignupSecondStep";
import SignupFirstStep from "./SignupFirstStep";
import SignupFinalStep from "./SignupFinalStep";
import SignupCompleteModal from "./SignupCompleteModal";

function SignupForm() {
  // TODO: accessToken도 마찬가지로 login 성공 시에 저장됨. useSearchTokens 자체 제거
  // const { newAccessToken, newRefreshToken } = useSearchTokens("session");

  const newAccessToken =
    typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : "";
  const newRefreshToken =
    typeof window !== "undefined" ? sessionStorage.getItem("refreshToken") : "";

  const { data: userData } = useQuerySignUpUser();
  const { data: languages } = useQueryDevelopLanguages();

  const [nextStep, setNextStep] = useState(0);

  const handleNextStep = () => {
    setNextStep(next => (next < 2 ? next + 1 : next));
  };

  const { isSignup, setSignupOpen } = useModalStore();

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

  const signUp = useMutationSignup(
    newAccessToken ?? "",
    newRefreshToken ?? "",
    languages ?? [],
  );

  const onSubmit = (data: z.infer<typeof SignupFormSchema>) => {
    signUp.mutate(data);
  };

  if (!userData || !languages) return <LoadingSpinner />;

  return (
    <>
      <CustomModal open={isSignup} setOpen={setSignupOpen}>
        <SignupCompleteModal />
      </CustomModal>

      <main className="p-6">
        <Form {...form}>
          <form className="h-screen" onSubmit={form.handleSubmit(onSubmit)}>
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
                `${nextStep === 1 ? "animate-signup-fade-in opacity-100" : "hidden"} ${nextStep === 2 && "animate-signup-fade-out"})}`,
              )}
              handleNextStep={handleNextStep}
              languages={languages}
            />
            <SignupFinalStep
              form={form}
              className={cn(
                `${nextStep === 2 ? "animate-signup-fade-in" : "hidden animate-signup-fade-out opacity-0"}`,
              )}
              newAccessToken={newAccessToken ?? ""}
              newRefreshToken={newRefreshToken ?? ""}
              setSignupOpen={setSignupOpen}
            />
          </form>
        </Form>
      </main>
    </>
  );
}

export default SignupForm;
