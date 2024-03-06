import { ResponseData } from "@/app/_common/types/response";
import { RequestProjectSummary } from "@/app/_common/types/project";

import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCard from "./ProjectCard";

interface MyProjectRequestsProps {
  data?: ResponseData<RequestProjectSummary>;
}

function MyProjectRequests({ data }: MyProjectRequestsProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">내가 보낸 요청</div>
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

export default MyProjectRequests;