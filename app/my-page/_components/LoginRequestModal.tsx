import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_common/shadcn/ui/alert-dialog";
import WithOnMounted from "@/app/_common/hoc/WithOnMounted";

import { navigate } from "@/app/_common/utils/redirect";

import { useQueryUserData } from "../_hooks/useQueryUserData";

function LoginRequestModal() {
  const { data, isLoading } = useQueryUserData();

  const handleClickLoginButton = () => {
    navigate("/login");
  };

  return (
    <AlertDialog open={!data && !isLoading}>
      <AlertDialogContent>
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

export default WithOnMounted(LoginRequestModal);
