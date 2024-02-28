import { UseFormReturn } from "react-hook-form";
import { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/app/_common/shadcn/utils";
import { Label } from "@/app/_common/shadcn/ui/label";
import { Input } from "@/app/_common/shadcn/ui/input";
import { FormItem } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import { SignUpUser, SignupRequest } from "../_type/signup";
import SignupHeader from "./SignupHeader";

interface SignupFirstStepProps {
  className?: ComponentProps<typeof cn>;
  handleNextStep: () => void;
  form: UseFormReturn<SignupRequest, SignupRequest>;
  user: SignUpUser;
}

function SignupFirstStep({
  className,
  handleNextStep,
  user,
}: SignupFirstStepProps) {
  const setUserName = () => {
    handleNextStep();
  };

  return (
    <section
      className={cn(
        "scroll-none flex h-full w-full flex-col overflow-y-auto",
        className,
      )}
    >
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
                src={user.avatarUrl}
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
          <Input disabled id="username" value={user.username} />
        </section>
      </section>
      <footer className="mb-4 mt-auto flex w-full flex-col items-center gap-2">
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
