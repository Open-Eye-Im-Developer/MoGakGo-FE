import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_common/shadcn/ui/select";

function ListSortSelect() {
  return (
    <Select>
      <SelectTrigger className="w-30 translate-x-0 translate-y-0 border-none px-2 shadow-none">
        <SelectValue placeholder="정렬" />
      </SelectTrigger>
      <SelectContent className="min-w-[6rem] text-end">
        <SelectItem className="pr-0" value="light" defaultChecked>
          글자순
        </SelectItem>
        <SelectItem className="pr-0" value="dark">
          완료순
        </SelectItem>
        <SelectItem className="pr-0" value="system">
          달성순
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default ListSortSelect;
