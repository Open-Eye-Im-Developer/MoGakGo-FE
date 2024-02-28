import React, { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/app/_common/shadcn/utils";
import { Progress } from "@/app/_common/shadcn/ui/progress";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import { getLanguageLogo, sortingLanguages } from "../_utils/sortingLanguages";

export interface Language {
  // image: string;
  language: string;
  byteSize: number;
}

interface LanguagesListProps {
  languages: Language[];
  className?: ComponentProps<typeof cn>;
}

function LanguagesList({ languages, className }: LanguagesListProps) {
  const sortedLanguages = sortingLanguages(languages);

  return (
    <ul className={cn("p-4", className)}>
      {sortedLanguages.map(({ language, percentage }, index) => (
        <li key={index} className="mb-4">
          <section className="mb-4 flex justify-between">
            <div className="h-[46px] w-[46px]">
              <AspectRatio ratio={1 / 1} className="h-fit w-fit">
                <Image
                  width={46}
                  height={46}
                  src={getLanguageLogo[language]}
                  alt="개발 언어 로고"
                />
              </AspectRatio>
            </div>
            <p>{language}</p>
          </section>
          <Progress className="h-2" value={percentage} />
        </li>
      ))}
    </ul>
  );
}

export default LanguagesList;
