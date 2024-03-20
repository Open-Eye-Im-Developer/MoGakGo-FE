import Link from "next/link";

import Icon from "@/app/_common/components/Icon";

import { useQueryUserData } from "../_hooks/useQueryUserData";
import { useQueryProjectList } from "../_hooks/useQueryProjectList";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCard from "./ProjectCard";

function MyProjectList() {
  const { data: userData } = useQueryUserData();
  const { data } = useQueryProjectList(userData?.id, 3);

  return (
    <div className="flex w-full flex-col gap-4">
      <Link href="/my-page/my-project">
        <div className="text-md flex items-center gap-1 font-bold">
          내가 생성한 만남 카드
          <Icon id="chevron-right" size={26} />
        </div>
      </Link>
      <div className="flex flex-col gap-2">
        {!data ? <ProjectCardSkeleton /> : null}
        {data?.data.length === 0 ? (
          <p className="text-sm text-gray-500">만남 카드가 없습니다.</p>
        ) : (
          data?.data.map(project => (
            <ProjectCard key={project.projectId} data={project} isModal />
          ))
        )}
      </div>
    </div>
  );
}

export default MyProjectList;
