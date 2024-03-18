import { cn } from "../shadcn/utils";
import { Button } from "../shadcn/ui/button";
import Icon from "./Icon";

interface CustomSonnerProps {
  type: "success" | "error" | "warning" | "info";
  title: string;
  description: string | undefined;
  label: React.ReactNode | undefined;
  onClick: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

const background = {
  success: "bg-neoGreen",
  error: "bg-neoRed",
  warning: "bg-neoYellow",
  info: "bg-neoBlue",
};

function CustomSonner(props: CustomSonnerProps) {
  const { type, title, description, label, onClick } = props;

  return (
    <section
      className={cn(
        "flex items-center justify-between rounded-lg border-2 border-black p-4 font-sans text-white",
        background[type],
      )}
    >
      <div className="flex items-center justify-start">
        <Icon id={`toast-${type}`} size={25} />
        <div className="px-4">
          <h5 className="">{title}</h5>
          {description && <h6>{description}</h6>}
        </div>
      </div>
      {label && onClick && (
        <Button className="text-black" onClick={onClick}>
          {label}
        </Button>
      )}
    </section>
  );
}

export default CustomSonner;
