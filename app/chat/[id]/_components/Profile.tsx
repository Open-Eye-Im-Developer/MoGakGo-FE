import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../_common/shadcn/ui/avatar";

interface ProfileType {
  imageUrl: string;
  name: string;
  children?: React.ReactNode;
}

function Profile({ imageUrl, name, children }: ProfileType) {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>{children}</div>
    </div>
  );
}

export default Profile;
