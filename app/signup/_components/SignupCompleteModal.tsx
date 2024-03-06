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
    <section className="flex flex-col gap-4 p-4">
      <header>
        <h2 className="text-2xl font-semibold text-primary">🎉 가입 완료</h2>
        <small className="text-sm text-gray-500">
          환영합니다! 회원가입이 완료되었습니다.
        </small>
      </header>
      <ProfileCard />
      <footer className="flex justify-end">
        <Button
          type="button"
          onClick={handleCompleted}
          id="signup"
          onMouseEnter={handlePresetPosition}
        >
          완료
        </Button>
      </footer>
    </section>
  );
}

export default SignupCompleteModal;
