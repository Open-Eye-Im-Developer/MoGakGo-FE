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
      variant="default"
      className="flex items-center justify-center bg-neoBlue px-3 text-white shadow-neo-thin"
      onClick={onRotate}
      disabled={isDisabled}
    >
      <Icon id="rotate" className="h-4 w-4" />
    </Button>
  );
}

export default ButtonRotate;
