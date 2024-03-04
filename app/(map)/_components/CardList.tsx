import ProjectCardContainer from "@/app/project/_components/ProjectCardContainer";
import {
  CarouselContent,
  CarouselItem,
} from "@/app/_common/shadcn/ui/carousel";

import { Project } from "@/app/_common/types/project";
import { Creator } from "@/app/_common/types/profile";

interface Props {
  cardList: {
    projectList: Project[];
    profileList: Creator[];
  };
}

function CardList({ cardList }: Props) {
  return (
    <CarouselContent>
      {cardList.projectList.map((project: Project) => (
        <CarouselItem key={project.projectId}>
          <div className="mb-20 flex items-center justify-center">
            <ProjectCardContainer project={project} />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}

export default CardList;
