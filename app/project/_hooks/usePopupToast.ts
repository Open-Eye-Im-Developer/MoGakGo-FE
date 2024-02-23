import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { ToastActionElement } from "@/app/_common/shadcn/ui/toast";

interface Data {
  timestamp: string;
  status: number;
  code: string;
  message: string;
}

function usePopupToast(
  triggerComponent: ToastActionElement | undefined = undefined,
) {
  const { toast } = useToast();

  const showToast = (data: Data, statusCode: number) => {
    if (statusCode === 201 || statusCode === 204) {
      toast({
        title:
          statusCode === 201
            ? "프로젝트 카드가 생성되었습니다."
            : "프로젝트 카드가 삭제되었습니다.",
        description:
          statusCode === 201
            ? "🎉 설레이는 매칭을 기다려봐요!"
            : "👋 다음에 또 만나요!",
      });
    } else {
      toast({
        title: "😢 오류가 발생했습니다.",
        description: data.message,
        variant: "destructive",
        action: triggerComponent,
      });
    }
  };

  return { showToast };
}

export default usePopupToast;
