"use client";

import { MouseEvent } from "react";
import { usePathname } from "next/navigation";

import { navigate } from "../utils/redirect";
import { Menubar, MenubarMenu, MenubarTrigger } from "../shadcn/ui/menubar";

function NavigationBottom() {
  const pathname = usePathname();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
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
