"use client";

import { navigate } from "../utils/redirect";
import { Menubar, MenubarMenu, MenubarTrigger } from "../shadcn/ui/menubar";

function NavigationBottom() {
  return (
    <Menubar
      defaultValue="map"
      className="absolute bottom-8 left-2/4 z-50 -translate-x-2/4 shadow-neo-b"
    >
      <MenubarMenu value="map">
        <MenubarTrigger
          onClick={() => navigate("/")}
          className="inline-block min-w-20"
        >
          지도
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => navigate("/my-page")}
          className="inline-block min-w-20"
        >
          마이
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => navigate("/chat")}
          className="inline-block min-w-20"
        >
          채팅
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => navigate("/project")}
          className="inline-block min-w-20"
        >
          모각고
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

export default NavigationBottom;
