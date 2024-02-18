import { ComponentProps } from "react";

import { cn } from "@/app/_common/shadcn/utils";
import { Button } from "@/app/_common/shadcn/ui/button";

import SignupHeader from "./SignupHeader";
import LanguagesList from "./LanguageList";

interface SignupSecondStepProps {
  className?: ComponentProps<typeof cn>;
  handleNextStep: () => void;
}

const LANGUAGE_MOCK_DATA = [
  {
    image: "/images/JSIcon.webp",
    name: "JavaScript",
    lines: 3000,
  },
  {
    image: "/images/TSIcon.webp",
    name: "TypeScript",
    lines: 5000,
  },
  {
    image: "/images/CSSIcon.webp",
    name: "CSS",
    lines: 2000,
  },
];

function SignupSecondStep({
  className,
  handleNextStep,
}: SignupSecondStepProps) {
  return (
    <section className={cn(className)}>
      <SignupHeader
        step="2"
        subTitle="Github 주 언어"
        description="현재 깃허브 계정에서 주로 사용하는 언어입니다."
      />
      <LanguagesList languages={LANGUAGE_MOCK_DATA} className="mt-2" />
      <section className="mt-5 flex flex-col items-center gap-2">
        <small className="xs text-gray-500">
          마이페이지에서 갱신이 가능합니다.
        </small>
        <Button size={"lg"} className="w-full" onClick={handleNextStep}>
          다음
        </Button>
      </section>
    </section>
  );
}

export default SignupSecondStep;
