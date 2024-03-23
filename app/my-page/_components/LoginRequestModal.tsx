"use client";

import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogOverlay,
} from "@/app/_common/shadcn/ui/alert-dialog";

import { useQuerySignUpUser } from "@/app/_common/hooks/queries/useQuerySignUpUser";

function LoginRequestModal() {
  const router = useRouter();
  const { data, isLoading } = useQuerySignUpUser();

  const handleClickLoginButton = () => {
    router.push("/login");
  };

  return (
    <AlertDialog open={!data && !isLoading}>
      <AlertDialogContent
        customOverlay={<AlertDialogOverlay className="z-100" />}
        className="z-100"
      >
        <AlertDialogHeader>
          <AlertDialogTitle>로그인이 필요한 페이지입니다.</AlertDialogTitle>
          <AlertDialogDescription>
            로그인 페이지로 이동하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={handleClickLoginButton}
            className="bg-neoBlue px-8 text-white"
          >
            로그인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoginRequestModal;
