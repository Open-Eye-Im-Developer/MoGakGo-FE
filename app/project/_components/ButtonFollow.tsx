import React from "react";
import { IconHeartFilled } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

function ButtonFollow() {
  return (
    <Button className="mt-0 flex items-center justify-center p-2 text-[#FF0000]">
      <IconHeartFilled />
    </Button>
  );
}

export default ButtonFollow;
