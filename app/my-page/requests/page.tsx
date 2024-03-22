"use client";

import { useMemo } from "react";

import { Button } from "@/app/_common/shadcn/ui/button";

import StackNavigator from "@/app/_common/components/StackNavigator";

import { useQueryUserData } from "../_hooks/useQueryUserData";
import { useInfiniteQueryProjectRequests } from "../_hooks/useInfiniteQueryProjectRequests";
import ProjectCardSkeleton from "../_components/ProjectCardSkeleton";
import ProjectCard from "../_components/ProjectCard";

function ProjectRequestsPage() {
  const { data: user } = useQueryUserData();
  const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
    useInfiniteQueryProjectRequests(user?.id);

  const projects = useMemo(
    () => data?.pages.map(page => (page ? page.data : [])).flat(),
    [data],
  );

  return (
    <>
      <StackNavigator element={"내가 보낸 요청"} />
      <main className="container flex min-h-full max-w-2xl flex-col gap-8 pb-8">
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
    </>
  );
}

export default ProjectRequestsPage;
