interface Form {
  place: string;
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
  tags?: string[] | undefined;
}

interface PlaceItem {
  place_name: string;
  distance: string;
  place_url: string;
  category_name: string;
  address_name: string;
  road_address_name: string;
  id: string;
  phone: string;
  category_group_code: string;
  category_group_name: string;
  x: string;
  y: string;
}

interface IFormProps {
  form: UseFormReturn<Form>;
}

interface IPlaceResponseProps {
  documents: PlaceItem[];
}

interface RequestList {
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

interface RequestListSuccessData {
  data: RequestList[] extends Array<infer U> ? U : never;
  hasNext: boolean;
  numberOfElements: number;
  size: number;
}

interface RequestListErrorData {
  timestamp: string;
  statusCode: number;
  code: string;
  message: string;
}

interface RequestListResponseData {
  data: RequestListSuccessData | RequestListErrorData;
  status: number;
}