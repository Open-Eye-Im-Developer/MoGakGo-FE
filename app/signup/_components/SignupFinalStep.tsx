"use client";

import { UseFormReturn } from "react-hook-form";
import { ComponentProps } from "react";

import { cn } from "@/app/_common/shadcn/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_common/shadcn/ui/form";
import { Checkbox } from "@/app/_common/shadcn/ui/checkbox";
import { Button } from "@/app/_common/shadcn/ui/button";

import { WANTED_JOB } from "@/app/_common/constants/wantedJob";

import { SignupRequest } from "../_type/signup";
import SignupHeader from "./SignupHeader";

interface SignupFinalStepProps {
  className: ComponentProps<typeof cn>;
  form: UseFormReturn<SignupRequest, SignupRequest>;
  newAccessToken: string;
  newRefreshToken: string;
  setSignupOpen: (open: boolean) => void;
}

function SignupFinalStep({
  className,
  form,
  setSignupOpen,
}: SignupFinalStepProps) {
  const { formState, control } = form;

  const handleOpenModal = () => {
    setSignupOpen(true);
  };

  return (
    <section className={cn("flex h-full w-full flex-col space-y-5", className)}>
      <SignupHeader
        step="3"
        subTitle="관심 직무 선택"
        description="최대 3개까지 선택이 가능합니다."
      />
      <FormField
        control={control}
        name="wantedJobs"
        render={() => (
          <FormItem className="relative grid grid-cols-2 p-4">
            {WANTED_JOB.map(item => (
              <FormField
                key={item.id}
                control={control}
                name="wantedJobs"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="mt-0 flex items-start space-x-3 space-y-0 p-2"
                    >
                      <FormControl>
                        <Checkbox
                          className="border-primary"
                          disabled={
                            field.value.length === 3 &&
                            !field.value.includes(item.id)
                          }
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={checked => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value.filter(
                                    value => value !== item.id,
                                  ),
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-nowrap text-xs font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage className="absolute bottom-0" />
          </FormItem>
        )}
      />
      <footer className="my-4 flex flex-col items-center gap-2">
        <small className="text-xs text-gray-400">
          마이페이지에서 수정이 가능합니다.
        </small>
        <Button
          type="submit"
          variant={"outline"}
          disabled={!formState.isValid}
          size={"lg"}
          className="w-[80%] bg-neoBlue text-white"
          onClick={handleOpenModal}
        >
          저장
        </Button>
      </footer>
    </section>
  );
}

export default SignupFinalStep;
