"use client";

import Lottie from "react-lottie-player";

import { cn } from "../shadcn/utils";
import animation from "../assets/spinner-animation.json";

interface LoadingSpinnerProps {
  width?: string;
  height?: string;
  className?: string;
}

function LoadingSpinner({
  width = "80%",
  height = "100%",
  className,
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full place-content-center bg-white",
        className,
      )}
    >
      <Lottie
        play
        animationData={animation}
        speed={0.5}
        style={{ width, height, padding: "2rem" }}
      />
    </div>
  );
}

export default LoadingSpinner;
