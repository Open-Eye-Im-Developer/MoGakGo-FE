import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { ToastActionElement } from "@/app/_common/shadcn/ui/toast";

import STATUS_CODE from "../_constants/statusMessage";

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
    if (statusCode === 201 || statusCode === 204 || statusCode === 200) {
      toast({
        title: STATUS_CODE[statusCode].title,
        description: STATUS_CODE[statusCode].description,
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
