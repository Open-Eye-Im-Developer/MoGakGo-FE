"use client";

import { ComponentProps } from "react";
import { useRouter } from "next/navigation";

import { cn } from "../shadcn/utils";
import Icon from "./Icon";

interface StackNavigatorProps extends ComponentProps<"header"> {
  element: React.ReactNode;
  path?: string;
}

function StackNavigator({
  element,
  path,
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
      className={cn("relative p-4 text-center text-lg", className)}
      {...props}
    >
      <Icon
        id="chevron-left"
        size={24}
        className="absolute cursor-pointer"
        onClick={!path ? handleBack : handlePushPath}
      />
      <h2>{element}</h2>
    </header>
  );
}

export default StackNavigator;
