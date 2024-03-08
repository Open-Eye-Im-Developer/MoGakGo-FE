"use client";

import { useMemo, useState } from "react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { Tabs, TabsList, TabsTrigger } from "@/app/_common/shadcn/ui/tabs";
import { Button } from "@/app/_common/shadcn/ui/button";

import { useInfiniteQueryProjectHistory } from "../_hooks/useInfiniteQueryProjectHistory";
import ProjectCardSkeleton from "../_components/ProjectCardSkeleton";
import ProjectCard from "../_components/ProjectCard";

function HistoryPage() {
  const [currentTab, setCurrentTab] = useState("all");
  const { user } = useAuthStore();
  const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
    useInfiniteQueryProjectHistory(user?.id);

  const projects = useMemo(
    () => data?.pages.map(page => (page ? page.data : [])).flat(),
    [data],
  );

  return (
    <main className="container max-h-full min-h-screen max-w-2xl space-y-4 bg-gray-50 dark:bg-gray-950">
      <Tabs
        defaultValue={currentTab}
        className="space-y-4"
        onValueChange={value => setCurrentTab(value)}
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">전체</TabsTrigger>
          {/* <TabsTrigger value="inprogress">매칭중</TabsTrigger>
          <TabsTrigger value="finished">종료</TabsTrigger>
          <TabsTrigger value="failed">실패</TabsTrigger> */}
        </TabsList>
      </Tabs>
      {/* TODO: currentTab 기준으로 필터링 */}
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
