import { ResponseData } from "@/app/_common/types/response";
import { Match } from "@/app/_common/types/matching";

import CardSkeleton from "./CardSkeleton";
import Card from "./Card";

interface MyProjectHistoryProps {
  data?: ResponseData<Match>;
}

function MyProjectHistory({ data }: MyProjectHistoryProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">지난 만남 카드</div>
      <div className="flex flex-col gap-2">
        {!data ? <CardSkeleton /> : null}
        {data?.data.length === 0 ? (
          <p className="text-sm text-gray-500">만남 카드가 없습니다.</p>
        ) : (
          data?.data.map(project => (
            <Card
              key={project.matchingId}
              image={project.anotherUserAvatarUrl}
              title={project.projectLocationDetail}
              body={`${project.projectStartTime} ~ ${project.projectEndTime}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MyProjectHistory;
