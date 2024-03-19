"use client";

import { useMemo } from "react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { Button } from "@/app/_common/shadcn/ui/button";

import StackNavigator from "@/app/_common/components/StackNavigator";

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
    <main className="container flex min-h-screen max-w-2xl flex-col gap-8 bg-gray-50 pb-8 dark:bg-gray-950">
      <StackNavigator element={"내가 생성한 프로젝트"} />
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
