"use client";

import { useMemo } from "react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { Button } from "@/app/_common/shadcn/ui/button";

import { useInfiniteQueryProjectList } from "../_hooks/useInfiniteQueryProjectList";
import ProjectCardSkeleton from "../_components/ProjectCardSkeleton";
import ProjectCard from "../_components/ProjectCard";

function MyProjectPage() {
  const { user } = useAuthStore();
  const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
    useInfiniteQueryProjectList(user?.id);

  const projects = useMemo(
    () => data?.pages.map(page => (page ? page.data : [])).flat(),
    [data],
  );

  return (
    <main className="container max-h-full min-h-screen max-w-2xl space-y-4 bg-gray-50 dark:bg-gray-950">
      {/* TODO: currentTab 기준으로 필터링 */}
      <section className="flex flex-col gap-2">
        {projects
          ? projects.map(el => <ProjectCard key={el.projectId} data={el} />)
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

export default MyProjectPage;
