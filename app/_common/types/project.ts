import { WantedJobIds } from "@/app/my-page/types";

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

export interface Project {
  projectId: number;
  creator: Creator;
  projectTags: string[];
  meetingInfo: MeetingInfo;
}

export interface ProjectList {
  data: Project[];
  hasNext: boolean;
  numberOfElements: number;
  size: number;
}
