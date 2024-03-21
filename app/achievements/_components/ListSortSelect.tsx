import { Dispatch, SetStateAction, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/app/_common/shadcn/ui/dropdown-menu";
import { Button } from "@/app/_common/shadcn/ui/button";

import Icon from "@/app/_common/components/Icon";

import { Achievement } from "@/app/_common/types/user";

interface ListSortSelectProps {
  achievements: Achievement[];
  setSorting: Dispatch<SetStateAction<Achievement[]>>;
}

function ListSortSelect({ setSorting, achievements }: ListSortSelectProps) {
  const [sortChecked, setSortChecked] = useState({
    words: true,
    completed: false,
    progress: false,
  });

  const handleSetSortByWords = () => {
    const sortedAchievements = [...achievements].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setSorting(sortedAchievements);

    setSortChecked({ words: true, completed: false, progress: false });
  };

  const handleSetSortByMoreLeft = () => {
    const sortedAchievements = [...achievements].sort(
      (a, b) =>
        a.requirementValue -
        a.progressCount -
        (b.requirementValue - b.progressCount),
    );
    setSorting(sortedAchievements);

    setSortChecked({ words: false, completed: true, progress: false });
  };

  const handleSetSortByLessLeft = () => {
    const sortedAchievements = [...achievements].sort(
      (a, b) =>
        b.requirementValue -
        b.progressCount -
        (a.requirementValue - a.progressCount),
    );
    setSorting(sortedAchievements);

    setSortChecked({ words: false, completed: false, progress: true });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-30 translate-x-0 translate-y-0 border-none px-2 pr-1 shadow-none">
        <Button className="text-sm" variant={"ghost"}>
          정렬 <Icon id="chevron-down" className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[6rem]">
        <DropdownMenuCheckboxItem
          onSelect={handleSetSortByWords}
          defaultChecked
          checked={sortChecked.words}
        >
          글자순
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onSelect={handleSetSortByMoreLeft}
          checked={sortChecked.completed}
        >
          적게 남은 순
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onSelect={handleSetSortByLessLeft}
          checked={sortChecked.progress}
        >
          많이 남은 순
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ListSortSelect;
