"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/app/_common/shadcn/utils";
import { Form } from "@/app/_common/shadcn/ui/form";

import { SignupFormSchema } from "../_utils/validation";
import SignupSecondStep from "./SignupSecondStep";
import SignupFirstStep from "./SignupFirstStep";
import SignupFinalStep from "./SignupFinalStep";
// import { useQueryUser } from "../_hooks/useQueryUser";

function SignupForm() {
  // const {data} = useQueryUser()
  const [nextStep, setNextStep] = useState(0);

  const handleNextStep = () => {
    setNextStep(next => (next < 2 ? next + 1 : next));
  };

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
      wanted_job: [],
    },
  });

  // const { mutate } = useMutationSignup();

  const onSubmit = (data: z.infer<typeof SignupFormSchema>) => {
    console.log(data);
    // mutate(data);
  };

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
          />
        </form>
      </Form>
    </main>
  );
}

export default SignupForm;
