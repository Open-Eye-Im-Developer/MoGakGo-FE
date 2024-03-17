import ProjectCardContainer from "@/app/project/_components/ProjectCardContainer";
import {
  CarouselContent,
  CarouselItem,
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
    <CarouselContent>
      {projectList.map((project: Project) => (
        <CarouselItem key={project.projectId}>
          <div className="mb-20 flex items-center justify-center">
            <ProjectCardContainer project={project} />
          </div>
        </CarouselItem>
      ))}
      {profileList.map((profile: Profile) => (
        <CarouselItem key={profile.response.id}>
          <div className="mb-20 flex items-center justify-center">
            <ProfileCardItem profile={profile} />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}

export default CardList;
