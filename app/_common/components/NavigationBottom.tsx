"use client";

import { usePathname } from "next/navigation";

import { toast } from "../utils/toast";
import { navigate } from "../utils/redirect";
import { getCookie } from "../utils/cookie";
import { Menubar, MenubarMenu, MenubarTrigger } from "../shadcn/ui/menubar";

function NavigationBottom() {
  const pathname = usePathname();

  const checkAuthNavigate = async (path: string) => {
    const refreshToken = await getCookie("refreshToken", "");
    if (refreshToken === "")
      return toast.warning("로그인하고 이용할 수 있어요!");
    navigate(path);
  };

  return (
    <Menubar
      defaultValue={pathname}
      className="fixed bottom-8 left-2/4 z-50 -translate-x-2/4 shadow-neo-b"
    >
      <MenubarMenu value="/">
        <MenubarTrigger
          onClick={() => navigate("/")}
          className="inline-block min-w-20"
        >
          지도
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/my-page">
        <MenubarTrigger
          onClick={() => navigate("/my-page")}
          className="inline-block min-w-20"
        >
          마이
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/chat">
        <MenubarTrigger
          onClick={() => checkAuthNavigate("/chat")}
          className="inline-block min-w-20"
        >
          채팅
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/project">
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
