import { Creator } from "@/app/_common/types/profile";

interface Form {
  place: string;
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
  tags?: string[] | undefined;
}

interface PlaceItemData {
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

interface FormProps {
  form: UseFormReturn<Form>;
}

interface PlaceResponseProps {
  documents: PlaceItem[];
}

interface RequestList {
  id: number;
  senderPreview: Creator;
  requestStatus: string;
}

interface RequestListError {
  timestamp: string;
  statusCode: number;
  code: string;
  message: string;
}

interface FormmatedValues {
  creatorId: number;
  meetStartTime: string;
  meetEndTime: string;
  meetLat: number;
  meetLng: number;
  meetDetail: string;
  tags: string[];
}
