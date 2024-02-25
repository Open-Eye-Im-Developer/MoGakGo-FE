import React from "react";
import { IconDotsCircleHorizontal } from "@tabler/icons-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_common/shadcn/ui/popover";
import { Button } from "@/app/_common/shadcn/ui/button";
import { Badge } from "@/app/_common/shadcn/ui/badge";

interface BadgeAdditionalProps {
  wantedJobs?: string[];
  developLanguages?: string[];
}

function BadgeAdditional(props: BadgeAdditionalProps) {
  const { wantedJobs, developLanguages } = props;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="p-2 hover:bg-[#5454543e]">
          <IconDotsCircleHorizontal size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <section>
          <main>
            <h3 className="mb-2 border-b pb-2 text-lg font-bold">관심 직무</h3>
            <div className="flex flex-wrap items-start gap-2">
              {wantedJobs?.map(job => (
                <Badge key={job} variant="secondary" className="text-sm">
                  {job}
                </Badge>
              ))}
            </div>
            <h3 className="mb-2 mt-4 border-b pb-2 text-lg font-bold">
              개발 언어
            </h3>
            <div className="flex flex-wrap items-start gap-2">
              {developLanguages?.map(language => (
                <Badge key={language} className="text-sm">
                  {language}
                </Badge>
              ))}
            </div>
          </main>
          <main></main>
        </section>
      </PopoverContent>
    </Popover>
  );
}

export default BadgeAdditional;
