import React from "react";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

import { Separator } from "../shadcn/ui/separator";

interface NavigationItemProps {
  title: string;
  href: string;
}

function NavigationItem(props: NavigationItemProps) {
  const { title, href } = props;

  return (
    <div className="mb-2 space-y-2 px-2">
      <Link href={href}>
        <div className="flex items-center justify-between rounded-md p-3 hover:bg-slate-100">
          <p className="text-lg">{title}</p>
          <IconChevronRight />
        </div>
      </Link>
      <Separator />
    </div>
  );
}

export default NavigationItem;
