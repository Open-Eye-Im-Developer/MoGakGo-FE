import { ChatProfileType } from "../../_types/chat";

export interface ProfileType {
  avatarUrl: string;
  username: string;
}

export interface ChatProjectType {
  meetDetail: string;
  meetStartTime: string;
  meetEndTime: string;
  meetLocationLatitude: number;
  meetLocationLongitude: number;
  chatUserInfo: ChatProfileType;
}
