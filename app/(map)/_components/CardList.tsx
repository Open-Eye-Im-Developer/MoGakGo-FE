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
      <div className="short:absolute short:top-1/2 short:w-full short:translate-y-[60px] min:bottom-2 relative mt-5 min-h-[40px] w-[90px]">
        <CarouselPrevious className="short:left-1 left-[-80px]" />
        <Button
          onClick={onClick}
          className="short:hidden absolute left-1/2 -translate-x-1/2"
        >
          돌아가기
        </Button>
        <CarouselNext className="short:right-1 right-[-80px]" />
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
