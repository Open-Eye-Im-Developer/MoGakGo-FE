"use client";

import { MouseEvent } from "react";
import { usePathname } from "next/navigation";

import { toast } from "../utils/toast";
import { navigate } from "../utils/redirect";
import { useAuthStore } from "../store/useAuthStore";
import { Menubar, MenubarMenu, MenubarTrigger } from "../shadcn/ui/menubar";

function NavigationBottom() {
  const pathname = usePathname();
  const { getUser } = useAuthStore();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!getUser()) {
      toast.warning("로그인 후 이용해주세요!", {
        action: {
          label: "로그인하기",
          onClick: () => navigate("login"),
        },
      });
      return;
    }

    const path = (event.target as HTMLButtonElement).value;
    navigate(path);
  };

  return (
    <Menubar
      defaultValue={pathname}
      className="fixed bottom-8 left-2/4 z-100 -translate-x-2/4 shadow-neo-b"
    >
      <MenubarMenu value="/">
        <MenubarTrigger
          value="/"
          onClick={handleClick}
          className="inline-block min-w-20"
        >
          지도
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/my-page">
        <MenubarTrigger
          value="/my-page"
          onClick={handleClick}
          className="inline-block min-w-20"
        >
          마이
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/chat">
        <MenubarTrigger
          value="/chat"
          onClick={handleClick}
          className="inline-block min-w-20"
        >
          채팅
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/project">
        <MenubarTrigger
          value="/project"
          onClick={handleClick}
          className="inline-block min-w-20"
        >
          모각고
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

export default NavigationBottom;
