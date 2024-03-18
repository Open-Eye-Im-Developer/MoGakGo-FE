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
      <div className="relative -bottom-5 h-10 w-[90px] short:absolute short:top-1/2 short:w-full short:translate-y-[60px]">
        <CarouselPrevious className="left-[-80px] short:left-1" />
        <Button
          onClick={onClick}
          className="absolute left-1/2 -translate-x-1/2 short:hidden"
        >
          돌아가기
        </Button>
        <CarouselNext className="right-[-80px] short:right-1" />
      </div>
      <Button
        onClick={onClick}
        className="short:inline-block absolute bottom-[4px] left-1/2 hidden -translate-x-1/2"
      >
        돌아가기
      </Button>
    </>
  );
}

export default CardList;
