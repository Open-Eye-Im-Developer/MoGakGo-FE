import { useRouter } from "next/navigation";

import { usePositionStore } from "@/app/_common/store/usePositionStore";
import { useModalStore } from "@/app/_common/store/useModalStore";
import { Button } from "@/app/_common/shadcn/ui/button";

import ProfileCard from "./ProfileCard";

function SignupCompleteModal() {
  const router = useRouter();
  const { setSignupOpen, setAuthLocationOpen } = useModalStore();
  const { setPosition } = usePositionStore();

  const handleCompleted = () => {
    router.push("/auth-mylocation");

    setSignupOpen(false);

    setAuthLocationOpen(true);
  };

  const handlePresetPosition = () => {
    setPosition();
  };

  return (
    <section className="flex flex-col items-center space-y-6 px-2 py-4">
      <header>
        <h2 className="text-center text-xl">🎉 가입 완료</h2>
        <small className="text-xs text-gray-500">
          환영합니다! 회원가입이 완료되었습니다.
        </small>
      </header>
      <ProfileCard />
      <Button
        type="button"
        variant={"outline"}
        className="w-[80%] bg-neoBlue text-white"
        onClick={handleCompleted}
        id="signup"
        onMouseEnter={handlePresetPosition}
      >
        시작하기
      </Button>
    </section>
  );
}

export default SignupCompleteModal;
