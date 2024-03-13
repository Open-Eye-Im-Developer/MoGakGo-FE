import { toast } from "sonner";
import Image from "next/image";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { IconExclamationCircle } from "@tabler/icons-react";

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

import { Like } from "@/app/_common/types/profile";

import { useMutationCancelLike } from "../_hooks/useMutationCancelLike";

import "dayjs/locale/ko";

interface CardProps {
  data: Like;
}

dayjs.extend(relativeTime);
dayjs.locale("ko");

function UserCard(props: CardProps) {
  const { data } = props;

  if (!data)
    return (
      <div className="align-center flex items-center gap-4 rounded-md bg-white p-3 dark:bg-gray-900">
        <div className="flex gap-2 text-red-500">
          <IconExclamationCircle />
          <p>올바르지 않은 유저 데이터입니다.</p>
        </div>
      </div>
    );

  return (
    <div className="align-center flex items-center gap-4 rounded-md bg-white p-3 dark:bg-gray-900">
      <div className="h-12 w-12 rounded-full">
        <Image
          src={data.avatarUrl}
          alt={`${data.username}'s avatar`}
          width={48}
          height={48}
        />
      </div>
      <div className="flex grow flex-col justify-center space-y-2">
        <div className="text-s flex items-center gap-2">{data.username}</div>
        <div className="text-xs">{dayjs(data.createdAt).fromNow()}</div>
      </div>
      <MatchCancelButton id={data.receiverId} />
    </div>
  );
}

interface MatchCancelButtonProps {
  id: number;
}

function MatchCancelButton(props: MatchCancelButtonProps) {
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

export default UserCard;
