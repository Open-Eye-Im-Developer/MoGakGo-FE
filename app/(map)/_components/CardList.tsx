import ProjectCardContainer from "@/app/project/_components/ProjectCardContainer";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_common/shadcn/ui/carousel";
import { Button } from "@/app/_common/shadcn/ui/button";

import { Project } from "@/app/_common/types/project";
import { Profile } from "@/app/_common/types/profile";

import ProfileCardItem from "./ProfileCardItem";

interface Props {
  cardList: {
    projectList: Project[];
    profileList: Profile[];
  };
  onClick: () => void;
}

function CardList({ cardList, onClick }: Props) {
  const { projectList, profileList } = cardList;

  return (
    <>
      <CarouselContent>
        {projectList.map((project: Project) => (
          <CarouselItem className="pb-11" key={project.projectId}>
            <div className="flex items-center justify-center">
              <ProjectCardContainer project={project} />
            </div>
          </CarouselItem>
        ))}
        {profileList.map((profile: Profile) => (
          <CarouselItem className="pt-11" key={profile.response.id}>
            <div className="flex items-center justify-center">
              <ProfileCardItem profile={profile} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-10 hidden md:inline-flex" />
      <CarouselNext className="right-10 hidden md:inline-flex" />
      <Button onClick={onClick} className="absolute bottom-10">
        돌아가기
      </Button>
    </>
  );
}

export default CardList;
