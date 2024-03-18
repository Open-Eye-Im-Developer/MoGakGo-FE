import ProjectCardContainer from "@/app/project/_components/ProjectCardContainer";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_common/shadcn/ui/carousel";

import { Project } from "@/app/_common/types/project";
import { Profile } from "@/app/_common/types/profile";

import ProfileCardItem from "./ProfileCardItem";

interface Props {
  cardList: {
    projectList: Project[];
    profileList: Profile[];
  };
}

function CardList({ cardList }: Props) {
  const { projectList, profileList } = cardList;

  return (
    <>
      <CarouselContent>
        {projectList.map((project: Project) => (
          <CarouselItem key={project.projectId}>
            <div className="flex items-center justify-center">
              <ProjectCardContainer project={project} />
            </div>
          </CarouselItem>
        ))}
        {profileList.map((profile: Profile) => (
          <CarouselItem key={profile.response.id}>
            <div className="flex items-center justify-center">
              <ProfileCardItem profile={profile} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-10 hidden md:inline-flex" />
      <CarouselNext className="right-10 hidden md:inline-flex" />
    </>
  );
}

export default CardList;
