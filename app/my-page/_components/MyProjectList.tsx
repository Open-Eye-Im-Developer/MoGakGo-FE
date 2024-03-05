import { ResponseData } from "@/app/_common/types/response";
import { ProjectSummary } from "@/app/_common/types/project";

import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCard from "./ProjectCard";

interface MyProjectListProps {
  data?: ResponseData<ProjectSummary>;
}

function MyProjectList({ data }: MyProjectListProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">내가 생성한 만남 카드</div>
      <div className="flex flex-col gap-2">
        {!data ? <ProjectCardSkeleton /> : null}
        {data?.data.length === 0 ? (
          <p className="text-sm text-gray-500">만남 카드가 없습니다.</p>
        ) : (
          data?.data.map(project => (
            <ProjectCard key={project.projectId} data={project} />
          ))
        )}
      </div>
    </div>
  );
}

export default MyProjectList;
