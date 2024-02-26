import { ComponentProps } from "react";

import { cn } from "@/app/_common/shadcn/utils";
import { Button } from "@/app/_common/shadcn/ui/button";

import { Language } from "../_type/signup";
import SignupHeader from "./SignupHeader";
import LanguagesList from "./LanguageList";

interface SignupSecondStepProps {
  className?: ComponentProps<typeof cn>;
  handleNextStep: () => void;
  languages: Language[];
}

function SignupSecondStep({
  className,
  handleNextStep,
  languages,
}: SignupSecondStepProps) {
  return (
    <section className={cn(className)}>
      <SignupHeader
        step="2"
        subTitle="Github 주 언어"
        description="현재 깃허브 계정에서 주로 사용하는 언어입니다."
      />
      <LanguagesList languages={languages} className="mt-2" />
      <section className="mt-5 flex flex-col items-center gap-2">
        <small className="xs text-gray-500">
          마이페이지에서 갱신이 가능합니다.
        </small>
        <Button
          type="button"
          size={"lg"}
          className="w-full"
          onClick={handleNextStep}
        >
          다음
        </Button>
      </section>
    </section>
  );
}

export default SignupSecondStep;
