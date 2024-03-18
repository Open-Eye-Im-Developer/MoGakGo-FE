import { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/app/_common/shadcn/utils";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import Icon from "@/app/_common/components/Icon";

import { Achievement } from "@/app/_common/types/user";

interface MyAchievementProps {
  achievement: Achievement;
  className?: ComponentProps<typeof cn>;
}

function MyAchievement({ achievement, className }: MyAchievementProps) {
  const { title, imgUrl } = achievement;

  return (
    <>
      <section
        className={cn(
          "flex cursor-pointer flex-col items-center space-y-3 rounded-md",
          className,
        )}
      >
        <Icon id="achievement" size={24} className="text-neoYellow" />
        <div className="w-full rounded-full bg-transparent">
          <AspectRatio ratio={1 / 1} className="relative flex">
            <Image
              width={200}
              height={200}
              src={imgUrl}
              alt="업적 뱃지"
              className="rounded-full object-cover"
            />
          </AspectRatio>
        </div>

        <p className="text-pretty rounded-full border border-white bg-gradient-to-r from-[#ACF5FF] to-[#BD89FF] px-4 py-1 text-center text-xs text-white shadow-neo-thin">
          {title}
        </p>
      </section>
    </>
  );
}

export default MyAchievement;
