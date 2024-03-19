import React, { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/app/_common/shadcn/utils";
import { Progress } from "@/app/_common/shadcn/ui/progress";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import { sortingLanguages } from "../_utils/sortingLanguages";
import { Language } from "../_type/signup";

interface LanguagesListProps {
  languages: Language[];
  className?: ComponentProps<typeof cn>;
}

function LanguagesList({ languages, className }: LanguagesListProps) {
  const sortedLanguages = sortingLanguages(languages).filter(
    ({ language }) => language !== "ETC",
  );

  return (
    <ul className={cn("p-4", className)}>
      {sortedLanguages.map(({ language, percentage, imageUrl }, index) => (
        <li key={index} className="mb-4">
          <section className="mb-3 flex items-end justify-between">
            <div className="h-[46px] w-[46px]">
              <AspectRatio ratio={1 / 1} className="h-fit w-fit">
                <Image
                  width={46}
                  height={46}
                  src={imageUrl}
                  alt="개발 언어 로고"
                  className="rounded-md shadow-neo-thin"
                />
              </AspectRatio>
            </div>
            <p>{language}</p>
          </section>
          <Progress
            className="h-[6px] border-none shadow-none"
            background={"blue"}
            value={percentage}
          />
        </li>
      ))}
    </ul>
  );
}

export default LanguagesList;
