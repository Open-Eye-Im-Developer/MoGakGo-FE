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

export type ProjectStatus = "PENDING" | "PROGRESS" | "FINISHED";
// TODO: 타입 보완 필요

export interface ProjectSummary {
  projectId: number;
  projectStatus: ProjectStatus;
  creatorAvatorUrl: string;
  projectLocationDetail: string;
  projectStartTime: string;
  projectEndTime: string;
}

export interface ReqeustProjectSummary {
  projectId: number;
  creatorAvatorUrl: string;
  meetingInfo: {
    meetStartTime: string;
    meetEndTime: string;
    meetDetail: string;
  };
}
