import { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/app/_common/shadcn/utils";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import Icon from "@/app/_common/components/Icon";

import { Achievement } from "@/app/_common/types/user";

import { toast } from "@/app/_common/utils/toast";

import MyAchievementSkeleton from "./skeleton/MyAchievementSkeleton";

interface MyAchievementProps {
  myAchievement: Achievement | undefined;
  className?: ComponentProps<typeof cn>;
}

function MyAchievement({ myAchievement, className }: MyAchievementProps) {
  const { title, imgUrl } = myAchievement || {
    title: "",
    imgUrl: "",
  };

  const handleClickMyAchievement = () => {
    toast.info("아직 설정된 업적이 없어요.");
  };

  if (!myAchievement) <MyAchievementSkeleton />;

  return (
    <>
      {myAchievement ? (
        <section
          className={cn(
            "flex cursor-pointer flex-col items-center space-y-3 rounded-md",
            className,
          )}
        >
          <Icon id="achievement" size={24} className="text-neoYellow" />
          <div className="w-[100px] rounded-full bg-transparent">
            <AspectRatio ratio={1 / 1} className="relative flex">
              <Image
                width={200}
                height={200}
                src={imgUrl ?? ""}
                alt="업적 뱃지"
                className="rounded-full object-cover"
              />
            </AspectRatio>
          </div>

          <p className="text-pretty rounded-full border border-white bg-gradient-to-r from-[#ACF5FF] to-[#BD89FF] px-4 py-1 text-center text-xs text-white shadow-neo-thin">
            {title}
          </p>
        </section>
      ) : (
        <>
          <small className="text-center text-xs text-gray-500">
            <p>
              현재 대표로 설정한 뱃지가 없어요.
              <br />
              획득한 업적으로 &apos;대표 뱃지&apos;를 변경할 수 있어요.
            </p>
          </small>
          <div
            className="mt-2 w-[100px] rounded-full bg-white"
            onClick={handleClickMyAchievement}
          >
            <AspectRatio
              ratio={1 / 1}
              className="relative grid place-content-center place-items-center"
            >
              <Icon
                id="lock"
                size={50}
                className="absolute z-10 text-neoYellow"
              />
            </AspectRatio>
          </div>
        </>
      )}
    </>
  );
}

export default MyAchievement;
