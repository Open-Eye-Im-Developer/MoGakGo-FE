"use client";

import { ComponentProps } from "react";
import { useRouter } from "next/navigation";

import { cn } from "../shadcn/utils";
import Icon from "./Icon";

interface HeaderNavigateProps extends ComponentProps<"header"> {
  title: string;
  path?: string;
}

function HeaderNavigate({
  title,
  path,
  className,
  ...props
}: HeaderNavigateProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handlePushPath = () => {
    if (!path) return;

    router.push(path);
  };

  return (
    <header
      className={cn("relative py-4 text-center text-lg", className)}
      {...props}
    >
      <Icon
        id="chevron-left"
        size={24}
        className="absolute cursor-pointer"
        onClick={!path ? handleBack : handlePushPath}
      />
      <h2>{title}</h2>
    </header>
  );
}

export default HeaderNavigate;
