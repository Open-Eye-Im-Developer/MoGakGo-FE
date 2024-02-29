import { ChevronDown } from "lucide-react";

import { cn } from "@/app/_common/shadcn/utils";
import { Button } from "@/app/_common/shadcn/ui/button";

import { ScrollUpperType } from "../_hooks/useScroll";

interface UpperScrollButtonProps {
  isScrollUpper: ScrollUpperType;
  message: string;
  scrollToBottom: () => void;
}

function UpScrollButton(props: UpperScrollButtonProps) {
  const { isScrollUpper, message, scrollToBottom } = props;

  const exposureElement = () => {
    if (isScrollUpper && message !== "") return "NEW";
    return isScrollUpper === "HIGH" ? "ARROW" : false;
  };

  return (
    <div onClick={scrollToBottom} className={"flex justify-center"}>
      <Button
        variant="outline"
        className={cn(
          "fixed bottom-36 flex max-w-80 gap-2",
          !exposureElement() && "hidden",
        )}
      >
        {exposureElement() === "NEW" ? (
          <div>
            <span className="text-slate-400">새로운 문자 : </span>
            {message}
          </div>
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

export default UpScrollButton;
