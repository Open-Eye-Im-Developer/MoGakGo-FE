"use client";

import { useMemo, useState } from "react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { Tabs, TabsList, TabsTrigger } from "@/app/_common/shadcn/ui/tabs";
import { Button } from "@/app/_common/shadcn/ui/button";

import StackNavigator from "@/app/_common/components/StackNavigator";

import { MatchStatus } from "@/app/_common/types/matching";

import { useInfiniteQueryProjectHistory } from "../_hooks/useInfiniteQueryProjectHistory";
import ProjectCardSkeleton from "../_components/ProjectCardSkeleton";
import ProjectCard from "../_components/ProjectCard";

function HistoryPage() {
  const [currentTab, setCurrentTab] = useState("ALL");

  const statusQuery = useMemo(
    () => (currentTab === "ALL" ? undefined : (currentTab as MatchStatus)),
    [currentTab],
  );

  const { user } = useAuthStore();
  const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
    useInfiniteQueryProjectHistory(user?.id, statusQuery);

  const projects = useMemo(
    () => data?.pages.map(page => (page ? page.data : [])).flat(),
    [data],
  );

  const handleChangeTab = (value: string) =>
    setCurrentTab(value as MatchStatus);

  return (
    <main className="container flex min-h-screen max-w-2xl flex-col gap-8 bg-gray-50 pb-8 dark:bg-gray-950">
      <StackNavigator content={"지난 만남 카드"} />
      <Tabs
        defaultValue={currentTab}
        className="space-y-4"
        onValueChange={handleChangeTab}
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ALL">전체</TabsTrigger>
          <TabsTrigger value="PROGRESS">매칭중</TabsTrigger>
          <TabsTrigger value="FINISHED">종료</TabsTrigger>
          <TabsTrigger value="CANCELED">실패</TabsTrigger>
        </TabsList>
      </Tabs>
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
  );
}

export default HistoryPage;
