import { ProfileType } from "../_types/message";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../_common/shadcn/ui/avatar";

export interface ProfileProps extends ProfileType {
  children?: React.ReactNode;
}

function Profile({ avatarUrl, username, children }: ProfileProps) {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{username.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>{children}</div>
    </div>
  );
}

export default Profile;
