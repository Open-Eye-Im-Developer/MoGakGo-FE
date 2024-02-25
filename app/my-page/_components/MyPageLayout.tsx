import Link from "next/link";
import { IconHistory, IconPencil } from "@tabler/icons-react";

import { Progress } from "@/app/_common/shadcn/ui/progress";
import { Button } from "@/app/_common/shadcn/ui/button";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import { UserType } from "../types";
import { WANTED_JOB } from "../constants";
import TempCard from "./TempCard";

interface MyPageLayoutProps {
  data: UserType;
}

function MyPageLayout({ data }: MyPageLayoutProps) {
  return (
    <main className="container flex min-h-screen max-w-2xl flex-col gap-8 bg-gray-50 dark:bg-gray-950">
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
          {data.wantedJobs.map(job => (
            <Badge key={job}>
              {WANTED_JOB.find(el => el.id === job)?.label}
            </Badge>
          ))}
          {data.developLanguages.map(lang => (
            <Badge key={lang}>{lang}</Badge>
          ))}
        </div>
        <div className="text-xs text-gray-400">
          {data.bio ?? "한줄 소개를 입력해주세요"}
        </div>
      </div>
      <div className="flex w-full justify-center gap-4">
        <PokeCount count={123} label="나를 찔러보기 한 사람" />
        <PokeCount count={5} label="내가 찔러보기 한 사람" />
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="text-xl font-bold">🌲나의 잔디력</div>
        <div className="flex flex-col gap-2">
          <Progress className="h-2.5" value={50} />
          <div className="text-xs">50%</div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="text-xl font-bold">내가 생성한 매칭</div>
        <div className="flex flex-col gap-2">
          <TempCard />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="text-xl font-bold">좋아요 누른 매칭</div>
        <div className="flex flex-col gap-2">
          <TempCard />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="text-xl font-bold">지난 매칭</div>
        <div className="flex flex-col gap-2">
          <TempCard />
          <TempCard />
          <TempCard />
        </div>
      </div>
      <Link href="/my-page/history">
        <Button className="w-full">
          <IconHistory className="mr-2" size={18} />
          전체 매칭 기록 보기
        </Button>
      </Link>
    </main>
  );
}

interface PokeCountProps {
  count: number;
  label: string;
}

function PokeCount({ count, label }: PokeCountProps) {
  return (
    <div className="flex flex-col items-center ">
      <div className="text-xl font-bold">{count}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}

export default MyPageLayout;
