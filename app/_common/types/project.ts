import { Creator } from "./profile";

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
