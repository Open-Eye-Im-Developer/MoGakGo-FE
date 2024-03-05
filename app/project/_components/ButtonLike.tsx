import { IconHeartFilled } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

function ButtonLike() {
  return (
    <Button className="mt-0 flex items-center justify-center bg-[#F9679C] p-2 text-white">
      <IconHeartFilled />
    </Button>
  );
}

export default ButtonLike;
