import { Button } from "@/app/_common/shadcn/ui/button";
import { IconRotate360 } from "@tabler/icons-react";
import React from "react";

interface RotateButtonProps {
  onRotate: () => void;
}

function RotateButton(props: RotateButtonProps) {
  const { onRotate } = props;
  return (
    <Button
      variant="ghost"
      className="mt-0 flex items-center justify-center p-0 text-[#a2a2a2]"
      onClick={onRotate}
    >
      <IconRotate360 />
    </Button>
  );
}

export default RotateButton;
