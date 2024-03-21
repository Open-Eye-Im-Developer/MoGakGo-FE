"use client";

import { useMemo, useState } from "react";

import { cn } from "@/app/_common/shadcn/utils";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/app/_common/shadcn/ui/menubar";
import { Button } from "@/app/_common/shadcn/ui/button";

import StackNavigator from "@/app/_common/components/StackNavigator";

import { MatchStatus } from "@/app/_common/types/matching";

import { useQueryUserData } from "../_hooks/useQueryUserData";
import { useInfiniteQueryProjectHistory } from "../_hooks/useInfiniteQueryProjectHistory";
import ProjectCardSkeleton from "../_components/ProjectCardSkeleton";
import ProjectCard from "../_components/ProjectCard";

const MENUS = [
  { id: "ALL", label: "전체", style: "data-[state=open]:bg-neoGreen" },
  { id: "PROGRESS", label: "매칭중", style: "data-[state=open]:bg-neoBlue" },
  { id: "FINISHED", label: "종료", style: "data-[state=open]:bg-neoYellow" },
  { id: "CANCELED", label: "실패", style: "data-[state=open]:bg-neoRed" },
];

function HistoryPage() {
  const [currentTab, setCurrentTab] = useState("ALL");

  const statusQuery = useMemo(
    () => (currentTab === "ALL" ? undefined : (currentTab as MatchStatus)),
    [currentTab],
  );

  const { data: user } = useQueryUserData();
  const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
    useInfiniteQueryProjectHistory(user?.id, statusQuery);

  const projects = useMemo(
    () => data?.pages.map(page => (page ? page.data : [])).flat(),
    [data],
  );

  return (
    <>
      <StackNavigator element={"지난 만남 카드"} />
      <main className="container flex min-h-screen max-w-2xl flex-col gap-8 pb-8">
        <Menubar value={currentTab}>
          {MENUS.map(menu => (
            <MenubarMenu key={menu.id} value={menu.id}>
              <MenubarTrigger
                className={cn("flex-grow justify-center", menu.style)}
                onClick={() => setCurrentTab(menu.id)}
              >
                {menu.label}
              </MenubarTrigger>
            </MenubarMenu>
          ))}
        </Menubar>
        <section className="flex flex-col gap-2">
          {projects
            ? projects.map(el => <ProjectCard key={el.matchingId} data={el} />)
            : null}
          {isPending || isFetching
            ? Array.from({ length: 5 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))
            : null}
        </section>
        <Button
          className="w-full"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetching}
        >
          더보기
        </Button>
      </main>
    </>
  );
}

export default HistoryPage;
