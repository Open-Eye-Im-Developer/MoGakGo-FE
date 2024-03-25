"use client";

import { ComponentProps } from "react";
import { useRouter } from "next/navigation";

import { cn } from "../shadcn/utils";
import Icon from "./Icon";

interface StackNavigatorProps extends ComponentProps<"header"> {
  element: React.ReactNode;
  path?: string;
  rightItem?: React.ReactNode;
}

function StackNavigator({
  element,
  path,
  rightItem,
  className,
  ...props
}: StackNavigatorProps) {
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
      className={cn(
        "relative flex w-full items-center justify-between px-4 py-8 text-center text-lg",
        className,
      )}
      {...props}
    >
      <div className="cursor-pointer">
        <Icon
          id="chevron-left"
          size={24}
          onClick={!path ? handleBack : handlePushPath}
        />
      </div>
      <h2>{element}</h2>
      <div className="cursor-pointer">{rightItem}</div>
    </header>
  );
}

export default StackNavigator;
