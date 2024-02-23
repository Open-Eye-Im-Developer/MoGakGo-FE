import { useQuery } from "@tanstack/react-query";

interface RequestListData {
  id: number;
  senderPreview: {
    id: number;
    username: string;
    githubId: string;
    avatarUrl: string;
    githubUrl: string;
    bio: string;
    jandiRate: number;
    achievementTitle: string;
    developLanguages: string[];
    wantedJobs: string[];
  };
  requestStatus: string;
}

interface SuccessData {
  data: RequestListData[] extends Array<infer U> ? U : never;
  hasNext: boolean;
  numberOfElements: number;
  size: number;
}

interface ErrorData {
  timestamp: string;
  statusCode: number;
  code: string;
  message: string;
}

interface ResponseData {
  data: SuccessData | ErrorData;
  status: string;
}

function useGetRequestListQuery() {
  const queryFunction = async () => {
    // await new Promise(resolve => setTimeout(resolve, 3000));
    const response = await fetch("/api/project/request/find");
    const data: ResponseData = await response.json();
    return data;
  };

  return useQuery({
    queryKey: ["requestList"] as const,
    queryFn: queryFunction,
  });
}

export default useGetRequestListQuery;
