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

import { useQuerySignUpUser } from "@/app/_common/hooks/queries/useQuerySignUpUser";

import { toast } from "@/app/_common/utils/toast";

import { useMutationCancelLike } from "../_hooks/useMutationCancelLike";

interface LikeCancelButtonProps {
  id: number;
}

function LikeCancelButton(props: LikeCancelButtonProps) {
  const { id } = props;
  const { data } = useQuerySignUpUser();
  const { mutate } = useMutationCancelLike();

  const handleCancelLike = () => {
    if (!data || !data.id) {
      toast.error("로그인이 필요합니다.");
      return;
    }
    mutate({ senderId: data.id, receiverId: id });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>취소</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>찔러보기를 취소하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            프로필 카드에서 다시 찔러보기 할 수 있습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>아니요</AlertDialogCancel>
          <AlertDialogAction onClick={handleCancelLike}>
            찔러보기 취소하기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LikeCancelButton;
