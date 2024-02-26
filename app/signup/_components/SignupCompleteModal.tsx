import React from "react";
import { useRouter } from "next/navigation";

import { useModalStore } from "@/app/_common/store/useModalStore";
import { Button } from "@/app/_common/shadcn/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_common/shadcn/ui/alert-dialog";

interface SignupCompleteModalProps {
  isValid: boolean;
}

function SignupCompleteModal({ isValid }: SignupCompleteModalProps) {
  const router = useRouter();
  const { setOpen } = useModalStore();

  const handleCompleted = () => {
    setOpen(true);
    router.push("/auth-mylocation");
  };

  return (
    <>
      <AlertDialog>
        <div className="mt-5 flex flex-col items-center gap-2">
          <small className="text-xs text-gray-500">
            마이페이지에서 수정이 가능합니다.
          </small>
          <Button
            disabled={!isValid}
            type="submit"
            size={"lg"}
            className="w-full"
            asChild
          >
            <AlertDialogTrigger disabled={!isValid}>저장</AlertDialogTrigger>
          </Button>
        </div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>🎉 가입 완료</AlertDialogTitle>
            <AlertDialogDescription>
              환영합니다! 회원가입이 완료되었습니다.
            </AlertDialogDescription>
            카드 컴포넌트는 여기 들어갑니다.
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction type="button" onClick={handleCompleted}>
              완료
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default SignupCompleteModal;
