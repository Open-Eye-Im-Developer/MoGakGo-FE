import { WantedJobIds } from "@/app/my-page/types";

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

interface Creator {
  id: number;
  username: string;
  githubId: string;
  avatarUrl: string;
  githubUrl: string;
  bio: string;
  jandiRate: number;
  achievementTitle: string;
  developLanguages: string[];
  wantedJobs: WantedJobIds[];
}

interface MeetingInfo {
  meetStartTime: string;
  meetEndTime: string;
  meetDetail: string;
}

interface Project {
  projectId: number;
  creator: Creator;
  projectTags: string[];
  meetingInfo: MeetingInfo;
}

interface ProjectListResponse {
  data: Project[];
  hasNext: boolean;
  numberOfElements: number;
  size: number;
}
