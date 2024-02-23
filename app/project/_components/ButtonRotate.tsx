import React from "react";
import { IconRotate360 } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

interface ButtonRotateProps {
  onRotate: () => void;
}

function ButtonRotate(props: ButtonRotateProps) {
  const { onRotate } = props;
  return (
    <Button
      variant="ghost"
      className="mt-0 flex items-center justify-center p-2 text-[#a2a2a2]"
      onClick={onRotate}
    >
      <IconRotate360 />
    </Button>
  );
}

export default ButtonRotate;
