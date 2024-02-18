import { UseFormReturn } from "react-hook-form";
import { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/app/_common/shadcn/utils";
import { Label } from "@/app/_common/shadcn/ui/label";
import { Input } from "@/app/_common/shadcn/ui/input";
import { FormItem } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import { SignupRequest } from "../_type/signup.types";
import SignupHeader from "./SignupHeader";

interface SignupFirstStepProps {
  className?: ComponentProps<typeof cn>;
  handleNextStep: () => void;
  form: UseFormReturn<SignupRequest, SignupRequest>;
}

function SignupFirstStep({
  className,
  handleNextStep,
  form,
}: SignupFirstStepProps) {
  const { setValue } = form;

  const setUserName = () => {
    handleNextStep();

    setValue("username", "mibu119");
  };

  return (
    <section className={cn("flex flex-col", className)}>
      <SignupHeader
        step="1"
        subTitle="Github 계정 연동"
        description="다음 정보를 github에서 가져옵니다."
      />
      <section className="flex flex-col gap-5 p-4">
        <FormItem>
          <Label htmlFor="profileImage" className="text-xs text-gray-400">
            프로필 사진
          </Label>
          <div className="ml-auto mr-auto w-[200px]" id="profileImage">
            <AspectRatio ratio={1 / 1} className="flex">
              <Image
                width={200}
                height={200}
                src="/images/cat.webp"
                alt="Image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </FormItem>
        <section className="flex flex-col justify-start gap-3">
          <Label htmlFor="username" className="text-xs text-gray-400">
            github 이름
          </Label>
          <Input disabled id="username" value={"mibu119"} />
        </section>
      </section>
      <footer className="mt-5 flex flex-col items-center gap-2">
        <small className="text-xs text-gray-500">
          마이페이지에서 수정이 가능합니다.
        </small>
        <Button
          size={"lg"}
          className="w-full"
          onClick={setUserName}
          type="button"
        >
          다음
        </Button>
      </footer>
    </section>
  );
}

export default SignupFirstStep;
