import React from "react";
import { IconRotate360 } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

interface ButtonRotateProps {
  isDisabled?: boolean;
  onRotate: () => void;
}

function ButtonRotate(props: ButtonRotateProps) {
  const { isDisabled, onRotate } = props;

  return (
    <Button
      variant="ghost"
      className="mt-0 flex items-center justify-center p-2 hover:bg-[#5454543e]"
      onClick={onRotate}
      disabled={isDisabled}
    >
      <IconRotate360 />
    </Button>
  );
}

export default ButtonRotate;
