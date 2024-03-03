import { ResponseData } from "@/app/_common/types/response";
import { ReqeustProjectSummary } from "@/app/_common/types/project";

import CardSkeleton from "./CardSkeleton";
import Card from "./Card";

interface MyProjectReqeustsProps {
  data?: ResponseData<ReqeustProjectSummary>;
}

function MyProjectReqeusts({ data }: MyProjectReqeustsProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">좋아요 누른 매칭</div>
      <div className="flex flex-col gap-2">
        {!data ? <CardSkeleton /> : null}
        {data?.data.length === 0 ? (
          <p className="text-sm text-gray-500">매칭이 없습니다.</p>
        ) : (
          data?.data.map(project => (
            <Card
              key={project.projectId}
              image={project.creatorAvatorUrl}
              title={project.meetingInfo.meetDetail}
              body={`${project.meetingInfo.meetStartTime} ~ ${project.meetingInfo.meetEndTime}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MyProjectReqeusts;
