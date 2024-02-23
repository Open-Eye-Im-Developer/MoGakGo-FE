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

import { WANTED_JOB } from "@/app/_common/constants/wantedJob.constants";

import { SignupRequest } from "../_type/signup";
import SignupHeader from "./SignupHeader";
import SignupCompleteModal from "./SignupCompleteModal";

interface SignupFinalStepProps {
  className: ComponentProps<typeof cn>;
  form: UseFormReturn<SignupRequest, SignupRequest>;
  newAccessToken: string;
  newRefreshToken: string;
}

function SignupFinalStep({ className, form }: SignupFinalStepProps) {
  const { formState, control } = form;

  return (
    <section className={cn(className)}>
      <SignupHeader
        step="3"
        subTitle="관심 직무 선택"
        description="최대 3개까지 선택이 가능합니다."
      />
      <div className="mt-5 space-y-8">
        <FormField
          control={control}
          name="wantedJobs"
          render={() => (
            <>
              <FormItem className="relative flex h-[558px] flex-col flex-wrap space-y-0">
                {WANTED_JOB.map(item => (
                  <FormField
                    key={item.id}
                    control={control}
                    name="wantedJobs"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="w-1/2 items-start space-x-3 space-y-0 p-2 text-primary"
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
                                      field.value?.filter(
                                        value => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage className="absolute bottom-0" />
              </FormItem>
            </>
          )}
        />
        <SignupCompleteModal isValid={formState.isValid} />
      </div>
    </section>
  );
}

export default SignupFinalStep;
