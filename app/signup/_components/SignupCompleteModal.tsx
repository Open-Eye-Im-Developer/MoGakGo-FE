import React from "react";
import { useRouter } from "next/navigation";

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
  newAccessToken: string;
}

function SignupCompleteModal({
  isValid,
  newAccessToken,
}: SignupCompleteModalProps) {
  const router = useRouter();

  const onCompleted = () => {
    localStorage.setItem("accessToken", newAccessToken);
    sessionStorage.removeItem("accessToken");
    router.push("/");
  };

  return (
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
          <AlertDialogAction type="button" onClick={onCompleted}>
            완료
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default SignupCompleteModal;
