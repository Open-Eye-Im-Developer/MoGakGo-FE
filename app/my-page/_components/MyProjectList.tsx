import { ResponseData } from "@/app/_common/types/response";
import { Project } from "@/app/_common/types/project";

import CardSkeleton from "./CardSkeleton";
import Card from "./Card";

interface MyProjectListProps {
  data?: ResponseData<Project>;
}

function MyProjectList({ data }: MyProjectListProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">내가 생성한 매칭</div>
      <div className="flex flex-col gap-2">
        {!data ? <CardSkeleton /> : null}
        {data?.data.length === 0 ? (
          <p className="text-sm text-gray-500">매칭이 없습니다.</p>
        ) : (
          data?.data.map(project => (
            <Card
              key={project.projectId}
              image={project.creator.avatarUrl}
              title={project.meetingInfo.meetDetail}
              body={`${project.meetingInfo.meetStartTime} ~ ${project.meetingInfo.meetEndTime}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MyProjectList;
