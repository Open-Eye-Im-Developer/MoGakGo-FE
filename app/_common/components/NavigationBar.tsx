"use client";

import React from "react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconChevronRight,
  IconMenu2,
} from "@tabler/icons-react";

import { SignUpUser } from "@/app/signup/_type/signup";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/app/_common/shadcn/ui/sheet";

import { useAuthStore } from "../store/useAuthStore";
import { Separator } from "../shadcn/ui/separator";
import { Badge } from "../shadcn/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";

interface NavigationItemProps {
  title: string;
  href: string;
}

interface NavigationProfileProps {
  user: Partial<SignUpUser>;
}

function NavigationItem(props: NavigationItemProps) {
  const { title, href } = props;

  return (
    <div className="mb-2 space-y-2 px-2">
      <Link href={href}>
        <div className="flex items-center justify-between rounded-md p-3 hover:bg-slate-100">
          <p className="text-lg">{title}</p>
          <IconChevronRight />
        </div>
      </Link>
      <Separator />
    </div>
  );
}

function NavigationProfile(props: NavigationProfileProps) {
  const {
    user: {
      username,
      achievementTitle,
      githubUrl,
      avatarUrl,
      wantedJobs,
      developLanguages,
      bio,
    },
  } = props;

  return (
    <section className="flex flex-col gap-5 px-6 py-10 text-lg">
      <main className="flex justify-evenly gap-5">
        <aside className="flex items-center justify-center">
          <Avatar className="h-32 w-32 border-4 border-slate-600">
            <AvatarImage src={avatarUrl as string} alt="프로필 이미지" />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
        </aside>
        <aside className="flex flex-col justify-around  gap-1">
          <div className="space-y-1">
            <h1 className="flex items-center gap-1">
              <p className="text-3xl font-semibold">{username}</p>
              <Link href={githubUrl as string}>
                <IconBrandGithub
                  size={32}
                  color="gray"
                  className="mt-1 rounded-full p-2 hover:bg-slate-100"
                />
              </Link>
            </h1>
            <p className="text-left text-sm text-[#F76A6A]">
              {achievementTitle}
            </p>
          </div>
          <h2 className="max-h-20 min-h-fit overflow-hidden text-ellipsis border-l-4 pl-3 text-left">
            {bio}
          </h2>
        </aside>
      </main>
      <footer className="space-y-2">
        <div className="flex gap-1">
          {wantedJobs && wantedJobs.map(job => <Badge key={job}>{job}</Badge>)}
        </div>
        <div className="flex gap-1">
          {developLanguages &&
            developLanguages.length > 0 &&
            developLanguages.map(lang => (
              <Badge key={lang.language}>{lang.language}</Badge>
            ))}
        </div>
      </footer>
    </section>
  );
}

// TODO: 튜토리얼과 모각코 페이지를 만들어서 링크를 연결해주세요. 현재는 임시로 '#'로 연결
function NavigationBar() {
  const { getUser } = useAuthStore();

  return (
    <Sheet>
      <SheetTrigger className="rounded-md p-2 hover:bg-slate-100 h-fit">
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
      </SheetContent>
    </Sheet>
  );
}

export default NavigationBar;
