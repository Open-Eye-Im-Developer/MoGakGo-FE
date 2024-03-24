import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

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
import WithOnMounted from "@/app/_common/hoc/WithOnMounted";

import { deleteCookie } from "@/app/_common/utils/cookie";

function LogoutButton() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleClickLogout = async () => {
    try {
      await deleteCookie("refreshToken", { path: "/" });
      await localStorage.removeItem("accessToken");
      await queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-neoRed text-white">로그아웃</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>알림</AlertDialogTitle>
          <AlertDialogDescription>
            로그아웃 하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleClickLogout}
            className="bg-neoBlue text-white"
          >
            로그아웃
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default WithOnMounted(LogoutButton);
