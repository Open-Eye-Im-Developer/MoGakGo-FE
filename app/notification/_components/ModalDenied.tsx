import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_common/shadcn/ui/alert-dialog";

function ModalDenied() {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>이미 알람이 거절되었습니다</AlertDialogTitle>
        <AlertDialogDescription>
          알람 받기를 희망하시는 경우,
          <br /> 알람 허용 설정을 진행해주세요.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>확인</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default ModalDenied;
