import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";
import { Avatar, AvatarFallback } from "@/app/_common/shadcn/ui/avatar";

function UserCardSkeleton() {
  return (
    <div className="align-center flex items-center gap-4 rounded-md border-2 border-black p-3 shadow-neo-thin dark:border-white">
      <Avatar className="h-12 w-12">
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center space-y-1">
        <div className="text-sm">
          <Skeleton className="h-[20px] w-[100px] rounded-none" />
        </div>
        <div className="text-xs">
          <Skeleton className="h-[16px] w-[100px] rounded-none" />
        </div>
      </div>
    </div>
  );
}

export default UserCardSkeleton;
