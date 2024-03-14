import { cn } from "../shadcn/utils";
import { Button } from "../shadcn/ui/button";

interface CustomSonnerProps {
  type: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
  action: {
    label: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
}

const background = {
  success: "bg-neoGreen",
  error: "bg-neoRed",
  warning: "bg-neoYellow",
  info: "bg-neoBlue",
};

function CustomSonner(props: CustomSonnerProps) {
  const { type, title, description, action } = props;
  const { label, onClick } = action;

  return (
    <section
      className={cn(
        "flex items-center justify-between rounded-lg border-2 border-black p-4 font-sans text-white",
        background[type],
      )}
    >
      <div className="flex items-center justify-start">
        {/* // TODO: svg sprite 작업 아후 아이콘 변경 및 타입별 아이콘 분기 처리 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height={25}
          width={25}
          id="Business-Product-Check--Streamline-Pixel"
          className="fill-white"
        >
          <desc>
            {"Business Product Check Streamline Icon: https://streamlinehq.com"}
          </desc>
          <title>{"business-product-check"}</title>
          <g>
            <path
              d="M21.71625 11.43375h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M20.56875 12.57375h1.1475v1.1400000000000001h-1.1475Z"
              strokeWidth={1}
            />
            <path
              d="M20.56875 10.286249999999999h1.1475v1.1475h-1.1475Z"
              strokeWidth={1}
            />
            <path
              d="M19.42875 13.713750000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M19.42875 9.14625h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="m18.28875 18.28875 -3.435 0 0 1.1400000000000001 4.574999999999999 0 0 -4.5675 -1.1400000000000001 0 0 3.4275z"
              strokeWidth={1}
            />
            <path
              d="m11.42625 12.57375 -1.1400000000000001 0 0 -1.1400000000000001 -1.1475 0 0 -1.1475 -1.1400000000000001 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1475 1.1475 0 0 1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 1.1400000000000001 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -1.1475 -1.1475 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1475 -1.1475 0 0 1.1400000000000001z"
              strokeWidth={1}
            />
            <path
              d="m18.28875 5.71875 0 3.4275 1.1400000000000001 0 0 -4.574999999999999 -4.574999999999999 0 0 1.1475 3.435 0z"
              strokeWidth={1}
            />
            <path
              d="M13.713750000000001 19.42875h1.1400000000000001v1.1475h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M13.713750000000001 3.4312500000000004h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M12.57375 20.576249999999998h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M12.57375 2.2912500000000002h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M11.42625 21.71625h1.1475v1.1400000000000001h-1.1475Z"
              strokeWidth={1}
            />
            <path
              d="M11.42625 1.1437499999999998h1.1475v1.1475h-1.1475Z"
              strokeWidth={1}
            />
            <path
              d="M10.286249999999999 20.576249999999998h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M10.286249999999999 2.2912500000000002h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M9.13875 19.42875h1.1475v1.1475h-1.1475Z"
              strokeWidth={1}
            />
            <path
              d="M9.13875 3.4312500000000004h1.1475v1.1400000000000001h-1.1475Z"
              strokeWidth={1}
            />
            <path
              d="m5.71125 18.28875 0 -3.4275 -1.1400000000000001 0 0 4.5675 4.5675 0 0 -1.1400000000000001 -3.4275 0z"
              strokeWidth={1}
            />
            <path
              d="m5.71125 5.71875 3.4275 0 0 -1.1475 -4.5675 0 0 4.574999999999999 1.1400000000000001 0 0 -3.4275z"
              strokeWidth={1}
            />
            <path
              d="M3.4312500000000004 13.713750000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M3.4312500000000004 9.14625h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
            <path
              d="M2.28375 12.57375h1.1475v1.1400000000000001h-1.1475Z"
              strokeWidth={1}
            />
            <path
              d="M2.28375 10.286249999999999h1.1475v1.1475h-1.1475Z"
              strokeWidth={1}
            />
            <path
              d="M1.1437499999999998 11.43375h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              strokeWidth={1}
            />
          </g>
        </svg>
        <div className="px-4">
          <h5 className="">{title}</h5>
          {description && <h6>{description}</h6>}
        </div>
      </div>
      {action && (
        <Button className="text-black" onClick={onClick}>
          {label}
        </Button>
      )}
    </section>
  );
}

export default CustomSonner;
