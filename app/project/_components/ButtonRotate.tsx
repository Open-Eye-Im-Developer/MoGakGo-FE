import React from "react";

import { Button } from "@/app/_common/shadcn/ui/button";

import Icon from "@/app/_common/components/Icon";

interface ButtonRotateProps {
  isDisabled?: boolean;
  onRotate: () => void;
}

function ButtonRotate(props: ButtonRotateProps) {
  const { isDisabled, onRotate } = props;

  return (
    <Button
      variant="ghost"
      className="mt-0 flex items-center justify-center p-3 hover:bg-[#5454543e]"
      onClick={onRotate}
      disabled={isDisabled}
    >
      <Icon id="rotate" className="h-5 w-5" />
    </Button>
  );
}

export default ButtonRotate;
