import Lottie from "react-lottie-player";
import Link from "next/link";

import { cn } from "@/app/_common/shadcn/utils";
import { buttonVariants } from "@/app/_common/shadcn/ui/button";

interface AnnounceEmptyActiveProps {
  animation: object;
  description: string;
}

function AnnounceEmptyActive({
  animation,
  description,
}: AnnounceEmptyActiveProps) {
  return (
    <div className="flex h-[70vh] text-gray-600">
      <div className="m-auto text-center">
        <Lottie play animationData={animation} className="w-40" />
        <span>{description}</span>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "block text-gray-400",
          )}
        >
          활동하러 가기
        </Link>
      </div>
    </div>
  );
}

export default AnnounceEmptyActive;
