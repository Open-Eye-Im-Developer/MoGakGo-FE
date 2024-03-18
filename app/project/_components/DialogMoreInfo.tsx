import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_common/shadcn/ui/dialog";
import { Button } from "@/app/_common/shadcn/ui/button";

import ProfileCard from "@/app/_common/components/ProfileCard";
import Icon from "@/app/_common/components/Icon";

interface DialogMoreInfoProps extends Profile {}

function DialogMoreInfo(props: DialogMoreInfoProps) {
  const profile = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Icon id="chevron-right" size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[600px] w-[330px] rounded-lg p-0 sm:w-[450px]">
        <ProfileCard profile={profile} isBehind={false} />
      </DialogContent>
    </Dialog>
  );
}

export default DialogMoreInfo;
