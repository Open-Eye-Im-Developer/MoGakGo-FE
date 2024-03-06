"use client";

import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/app/_common/shadcn/ui/tabs";

import ProjectCardSkeleton from "../_components/ProjectCardSkeleton";

function HistoryPage() {
  const [currentTab, setCurrentTab] = useState("all");

  return (
    <main className="container max-h-full min-h-screen max-w-2xl space-y-4 bg-gray-50 dark:bg-gray-950">
      <Tabs
        defaultValue={currentTab}
        className="space-y-4"
        onValueChange={value => setCurrentTab(value)}
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="inprogress">매칭중</TabsTrigger>
          <TabsTrigger value="finished">종료</TabsTrigger>
          <TabsTrigger value="failed">실패</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* TODO: currentTab 기준으로 필터링 */}
      <section className="flex flex-col gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </section>
    </main>
  );
}

export default HistoryPage;
