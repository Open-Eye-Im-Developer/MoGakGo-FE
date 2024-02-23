import React from "react";
import { IconLogout } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

function ButtonCancel() {
  return (
    <Button className="mt-0 flex items-center justify-center p-2">
      <IconLogout />
    </Button>
  );
}

export default ButtonCancel;
