import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

import { SignUpUser } from "@/app/signup/_type/signup";

import { Badge } from "../shadcn/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";

interface NavigationProfileProps {
  user: Partial<SignUpUser>;
}

function NavigationProfile(props: NavigationProfileProps) {
  const {
    user: {
      username,
      achievementTitle,
      githubUrl,
      avatarUrl,
      wantedJobs,
      developLanguages,
      bio,
    },
  } = props;

  return (
    <section className="flex flex-col gap-5 px-6 py-10 text-lg">
      <main className="flex justify-evenly gap-5">
        <aside className="flex items-center justify-center">
          <Avatar className="h-32 w-32 border-4 border-slate-600">
            <AvatarImage src={avatarUrl as string} alt="프로필 이미지" />
            <AvatarFallback>{username}</AvatarFallback>
          </Avatar>
        </aside>
        <aside className="flex flex-col justify-around  gap-1">
          <div className="space-y-1">
            <h1 className="flex items-center gap-1">
              <p className="text-3xl font-semibold">{username}</p>
              <Link href={githubUrl as string}>
                <IconBrandGithub
                  size={32}
                  color="gray"
                  className="mt-1 rounded-full p-2 hover:bg-slate-100"
                />
              </Link>
            </h1>
            <p className="text-left text-sm text-[#F76A6A]">
              {achievementTitle}
            </p>
          </div>
          <h2 className="max-h-20 min-h-fit overflow-hidden text-ellipsis border-l-4 pl-3 text-left">
            {bio}
          </h2>
        </aside>
      </main>
      <footer className="space-y-2">
        <div className="flex gap-1">
          {wantedJobs && wantedJobs.map(job => <Badge key={job}>{job}</Badge>)}
        </div>
        <div className="flex gap-1">
          {developLanguages &&
            developLanguages.length > 0 &&
            developLanguages.map(lang => <Badge key={lang}>{lang}</Badge>)}
        </div>
      </footer>
    </section>
  );
}

export default NavigationProfile;
