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

interface FormProps {
  form: UseFormReturn<Form>;
}

interface PlaceResponseProps {
  documents: PlaceItem[];
}
