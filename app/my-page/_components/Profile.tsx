import Link from "next/link";
import { IconPencil } from "@tabler/icons-react";

import { SignUpUser } from "@/app/signup/_type/signup";
import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import { WANTED_JOB } from "@/app/_common/constants/wantedJob.constants";

interface ProfileProps {
  data?: SignUpUser;
}

function Profile({ data }: ProfileProps) {
  if (!data) return <ProfileSkeleton />;
  return <ProfileLayout data={data} />;
}

export default Profile;

interface ProfileLayoutProps {
  data: SignUpUser;
}

export function ProfileLayout({ data }: ProfileLayoutProps) {
  return (
    <div className="flex max-w-2xl flex-col items-center gap-1.5">
      <div className="relative h-52 w-52">
        {/* 프로필 */}
        <div className="h-full w-full bg-slate-200"></div>
        <Link href="/my-page/edit">
          <div className="absolute bottom-0 right-0 inline-block bg-primary p-2 text-white">
            <IconPencil />
          </div>
        </Link>
      </div>
      <div className="text-xs text-orange-400">모각코도 한걸음부터</div>
      <div className="text-xl font-bold">{data.username}</div>
      <div className="flex gap-1">
        {data.wantedJobs?.map(job => (
          <Badge key={job}>{WANTED_JOB.find(el => el.id === job)?.label}</Badge>
        ))}
        {data.developLanguages?.map(lang => (
          <Badge key={lang.language}>{lang.language}</Badge>
        ))}
      </div>
      <div className="text-xs text-gray-400">
        {!data.bio || data.bio.trim().length === 0
          ? "한 줄 소개를 입력해주세요."
          : data.bio}
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="flex max-w-2xl flex-col items-center gap-1.5">
      <div className="relative h-52 w-52">
        {/* 프로필 */}
        <div className="h-full w-full bg-slate-200"></div>
        <div className="absolute bottom-0 right-0 inline-block bg-primary p-2 text-white">
          <IconPencil />
        </div>
      </div>
      <div className="text-xs text-orange-400">
        {" "}
        <Skeleton className="h-[16px] w-[100px] rounded-none" />
      </div>
      <div className="text-xl font-bold">
        <Skeleton className="h-[28px] w-[100px] rounded-none" />
      </div>
      <div className="flex gap-1">
        <Skeleton className="h-[22.2px] w-[80px] rounded-full" />
        <Skeleton className="h-[22.2px] w-[80px] rounded-full" />
        <Skeleton className="h-[22.2px] w-[80px] rounded-full" />
      </div>
      <div className="text-xs text-gray-400">
        <Skeleton className="h-[16px] w-[120px] rounded-none" />
      </div>
    </div>
  );
}
