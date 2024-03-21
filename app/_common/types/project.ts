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
  projectStatus: string;
  meetingInfo: MeetingInfo;
}

export type ProjectStatus = "PENDING" | "MATCHED" | "CANCELED" | "FINISHED";

export interface ProjectSummary {
  projectId: number;
  projectStatus: ProjectStatus;
  creatorAvatorUrl: string;
  projectLocationDetail: string;
  projectStartTime: string;
  projectEndTime: string;
}

export interface RequestProjectSummary {
  projectId: number;
  creatorAvatorUrl: string;
  meetingInfo: {
    meetStartTime: string;
    meetEndTime: string;
    meetDetail: string;
  };
}
