import { SignUpUser } from "@/app/signup/_type/signup";
import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import { useQuerySignUpUser } from "@/app/_common/hooks/queries/useQuerySignUpUser";

import { WANTED_JOB } from "@/app/_common/constants/wantedJob";

import DevelopLanguageModal from "./DevelopLanguageModal";

const badgeStyle = "border border-black bg-white text-black";

function Badges() {
  const { data } = useQuerySignUpUser();

  if (!data) return <BadgesSkeleton />;
  return <BadgesLayout data={data} />;
}

export default Badges;

interface BadgesLayoutProps {
  data: SignUpUser;
}

export function BadgesLayout(props: BadgesLayoutProps) {
  const { data } = props;

  return (
    <DevelopLanguageModal>
      <div className="flex flex-wrap justify-center gap-1">
        {data.wantedJobs?.map(job => (
          <Badge key={job} className={badgeStyle}>
            {WANTED_JOB.find(el => el.id === job)?.label}
          </Badge>
        ))}
        {data.developLanguages?.map(lang => (
          <Badge key={lang} className={badgeStyle}>
            {lang}
          </Badge>
        ))}
      </div>
    </DevelopLanguageModal>
  );
}

export function BadgesSkeleton() {
  return (
    <div className="flex justify-center  gap-1">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="h-[22.2px] w-[80px] rounded-full" />
      ))}
    </div>
  );
}
