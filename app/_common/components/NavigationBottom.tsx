"use client";

import { MouseEvent } from "react";
import { usePathname } from "next/navigation";

import { toast } from "../utils/toast";
import { navigate } from "../utils/redirect";
import { useAuthStore } from "../store/useAuthStore";
import { cn } from "../shadcn/utils";
import { Menubar, MenubarMenu, MenubarTrigger } from "../shadcn/ui/menubar";

function NavigationBottom() {
  const pathname = usePathname();
  const { getUser } = useAuthStore();

  const handleNavigateClick = (event: MouseEvent<HTMLButtonElement>) => {
    const path = (event.target as HTMLButtonElement).value;
    navigate(path);
  };

  const handleNoAuthClick = () => {
    toast.warning("로그인 후 이용해주세요!", {
      action: {
        label: "로그인하기",
        onClick: () => navigate("login"),
      },
    });
  };

  return (
    <Menubar
      defaultValue={pathname}
      className="fixed bottom-8 left-2/4 z-100 -translate-x-2/4 shadow-neo-b"
    >
      <div
        className={cn(
          "fixed bottom-0 left-20 right-0 top-0 min-h-10",
          getUser() && "hidden",
        )}
        onClick={handleNoAuthClick}
      />
      <MenubarMenu value="/">
        <MenubarTrigger
          value="/"
          onClick={handleNavigateClick}
          className="inline-block min-w-20"
        >
          지도
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/my-page">
        <MenubarTrigger
          value="/my-page"
          onClick={handleNavigateClick}
          className="inline-block min-w-20"
        >
          마이
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/chat">
        <MenubarTrigger
          value="/chat"
          onClick={handleNavigateClick}
          className="inline-block min-w-20"
        >
          채팅
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/project">
        <MenubarTrigger
          value="/project"
          onClick={handleNavigateClick}
          className="inline-block min-w-20"
        >
          모각고
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

export default NavigationBottom;
