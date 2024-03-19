import { useQuerySignUpUser } from "@/app/signup/_hooks/useQuerySignUpUser";
import { Button } from "@/app/_common/shadcn/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_common/shadcn/ui/alert-dialog";

import { useDeleteUser } from "@/app/_common/hooks/mutation/useDeleteUser";

import { toast } from "@/app/_common/utils/toast";

function DeleteUserButton() {
  const { data } = useQuerySignUpUser();
  const { mutate } = useDeleteUser();

  const handleCancelLike = () => {
    if (!data || !data.id) {
      toast.error("로그인이 필요합니다.");
      return;
    }
    mutate();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="w-full" variant="destructive">
          회원 탈퇴
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>회원 탈퇴를 진행하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            탈퇴하시면 되돌릴 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleCancelLike}>
            탈퇴하기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteUserButton;
