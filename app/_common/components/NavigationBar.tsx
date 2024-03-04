"use client";

import React from "react";
import { IconMenu2 } from "@tabler/icons-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/app/_common/shadcn/ui/sheet";

import { useAuthStore } from "../store/useAuthStore";
import { Separator } from "../shadcn/ui/separator";
import NavigationProfile from "./NavigationProfile";
import NavigationItem from "./NavigationItem";

// TODO: 튜토리얼과 모각코 페이지를 만들어서 링크를 연결해주세요. 현재는 임시로 '#'로 연결
function NavigationBar() {
  const { getUser } = useAuthStore();

  return (
    <Sheet>
      <SheetTrigger className="h-fit rounded-md p-2 hover:bg-slate-100">
        <IconMenu2 />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[360px] overflow-hidden p-0 sm:w-[540px] sm:rounded-l-3xl"
      >
        <SheetHeader>
          <NavigationProfile user={getUser()} />
        </SheetHeader>
        <Separator className="mb-4 h-2 bg-slate-100 shadow-inner" />
        <NavigationItem title="튜토리얼" href="#" />
        <NavigationItem title="마이페이지" href="/my-page" />
        <NavigationItem title="지도" href="/" />
        <NavigationItem title="채팅" href="/chat" />
        <NavigationItem title="모각코" href="#" />
        <NavigationItem title="업적" href="/achievements" />
        <NavigationItem title="알림" href="/notification" />
      </SheetContent>
    </Sheet>
  );
}

export default NavigationBar;
