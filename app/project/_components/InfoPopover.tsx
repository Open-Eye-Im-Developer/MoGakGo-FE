import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_common/shadcn/ui/popover";
import { Button } from "@/app/_common/shadcn/ui/button";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import Icon from "@/app/_common/components/Icon";

import { WANTED_JOB_LABELS } from "@/app/_common/constants/wantedJob";

import { WantedJobs } from "@/app/_common/types/user";

type InfoType = "LANG" | "INTEREST";

interface InfoPopoverProps {
  type: InfoType;
  infoList: string[] | WantedJobs[] | undefined;
}

function InfoPopover(props: InfoPopoverProps) {
  const { type, infoList } = props;
  const title = type === "LANG" ? "개발 언어" : "관심 직무";
  const iconId = type === "LANG" ? "info-tech" : "info-job";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-10">
          <span className="text-lg">{title}</span>
          <Icon id="chevron-right" className="h-6 w-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[200px] space-y-2">
        <header className="flex items-center gap-3 text-lg">
          <p>{title}</p>
          <Icon id={iconId} className="h-6 w-6" />
        </header>
        <main className="flex flex-wrap gap-1">
          {infoList!.map(info => (
            <Badge key={info} variant="outline">
              {type === "LANG"
                ? info
                : WANTED_JOB_LABELS[info as keyof typeof WANTED_JOB_LABELS]}
            </Badge>
          ))}
        </main>
      </PopoverContent>
    </Popover>
  );
}

export default InfoPopover;
