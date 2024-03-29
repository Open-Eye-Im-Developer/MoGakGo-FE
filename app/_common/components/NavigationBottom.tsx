"use client";

import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { toast } from "../utils/toast";
import { useAuthStore } from "../store/useAuthStore";
import { cn } from "../shadcn/utils";
import { Menubar, MenubarMenu, MenubarTrigger } from "../shadcn/ui/menubar";
import WithOnMounted from "../hoc/WithOnMounted";

function NavigationBottom() {
  const router = useRouter();
  const pathname = usePathname();
  const { getUser } = useAuthStore();

  const handleNavigateClick = (event: MouseEvent<HTMLButtonElement>) => {
    const path = (event.target as HTMLButtonElement).value;
    router.push(path);
  };

  const handleNoAuthClick = () => {
    toast.info("로그인 후 이용해주세요!", {
      action: {
        label: "로그인하기",
        onClick: () => router.push("/login"),
      },
    });
  };

  return (
    <Menubar
      defaultValue={pathname}
      className="fixed bottom-8 left-2/4 z-[45] -translate-x-2/4 shadow-neo-b"
      onClick={!getUser() ? handleNoAuthClick : () => {}}
    >
      <MenubarMenu value="/">
        <MenubarTrigger
          value="/"
          onClick={handleNavigateClick}
          className={cn(
            "inline-block min-w-20",
            !getUser() ? "pointer-events-none" : "",
          )}
        >
          지도
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/my-page">
        <MenubarTrigger
          value="/my-page"
          onClick={handleNavigateClick}
          className={cn(
            "inline-block min-w-20",
            !getUser() ? "pointer-events-none" : "",
          )}
        >
          마이
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/chat">
        <MenubarTrigger
          value="/chat"
          onClick={handleNavigateClick}
          className={cn(
            "inline-block min-w-20",
            !getUser() ? "pointer-events-none" : "",
          )}
        >
          채팅
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="/project">
        <MenubarTrigger
          value="/project"
          onClick={handleNavigateClick}
          className={cn(
            "inline-block min-w-20",
            !getUser() ? "pointer-events-none" : "",
          )}
        >
          모각고
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

export default WithOnMounted(NavigationBottom);
