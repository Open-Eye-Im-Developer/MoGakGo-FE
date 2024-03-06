import { ResponseData } from "@/app/_common/types/response";
import { Match } from "@/app/_common/types/matching";

import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCard from "./ProjectCard";

interface MyProjectHistoryProps {
  data?: ResponseData<Match>;
}

function MyProjectHistory({ data }: MyProjectHistoryProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">지난 만남 카드</div>
      <div className="flex flex-col gap-2">
        {!data ? <ProjectCardSkeleton /> : null}
        {data?.data.length === 0 ? (
          <p className="text-sm text-gray-500">만남 카드가 없습니다.</p>
        ) : (
          data?.data.map(project => (
            <ProjectCard key={project.matchingId} data={project} />
          ))
        )}
      </div>
    </div>
  );
}

export default MyProjectHistory;